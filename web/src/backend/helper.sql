CREATE OR REPLACE FUNCTION Calculate_Relation(user1 INTEGER, user2 INTEGER) RETURNS NUMERIC
AS $$
DECLARE
    total_score NUMERIC := 0;
    user1_score INTEGER[];
    user2_score INTEGER[];
    user1_len NUMERIC := 0;
    user2_len NUMERIC := 0;
BEGIN
    SELECT perference_score INTO user1_score
    FROM Users u
    WHERE u.id = user1;
    SELECT perference_score INTO user2_score
    FROM Users u
    WHERE u.id = user2;

    raise notice 'length = %', array_length(user1_score, 1);
    FOR i IN 1..array_length(user1_score, 1) 
    LOOP
        total_score := total_score + user1_score[i] * user2_score[i];
        user1_len := user1_len + POWER(user1_score[i], 2);
        user2_len := user2_len + POWER(user2_score[i], 2);
    END LOOP;
    total_score := total_score / (SQRT(user1_len) * SQRT(user2_len));
    raise notice 'user1_len = %, user2_len=%, total_score = %', user1_len, user2_len, total_score;
    
    
    RETURN ROUND(total_score, 4);
END;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION Calculate_Distance(user1 INTEGER, user2 INTEGER) RETURNS NUMERIC
AS $$
DECLARE
    long1 NUMERIC;
    la1 NUMERIC;
    long2 NUMERIC;
    la2 NUMERIC;
BEGIN
    SELECT longitude, latitude INTO long1, la1
    FROM Users 
    WHERE id = user1;
    SELECT longitude, latitude INTO long2, la2
    FROM Users 
    WHERE id = user2;

    RETURN ROUND(SQRT(POWER((long1-long2)*111, 2) + POWER((la1-la2)*111, 2)));
END;
$$ LANGUAGE PLPGSQL;

CREATE TYPE EventInfo AS (
    event_id INTEGER,
    name TEXT,
    image_url TEXT,
    event_url TEXT,
    event_type Event_Type,
    place TEXT,
    start_date DATE,
    end_date DATE 
)

CREATE OR REPLACE FUNCTION Get_Event_Info(event_id INTEGER) RETURNS EventInfo
AS $$
DECLARE
  result EventInfo;
BEGIN
    SELECT * INTO result
    FROM Events
    WHERE id = event_id;
    
    RETURN result;
    
END;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE FUNCTION Relation_Ranking(user_id INTEGER) RETURNS TABLE (
    id INTEGER, name TEXT, sex INTEGER, age INTEGER,
    image_url TEXT, motto TEXT,
    city TEXT, town TEXT,
    relative_score NUMERIC,
    distance NUMERIC,
    favorite_event EventInfo,
    interest_event EventInfo
)
AS $$
BEGIN

    EXECUTE format('
        CREATE OR REPLACE VIEW User_Relation AS
        SELECT id, Calculate_Relation(%L, id) as relative_score, Calculate_Distance(%L, id) as distance
        FROM Users', user_id, user_id);
    
    RETURN QUERY (
        SELECT u.id, u.user_name, u.sex, u.age, u.image_url, u.motto, u.city, u.town, 
                ur.relative_score, ur.distance, 
                Get_Event_Info(u.favorite_event),
                Get_Event_Info(u.interest_event)
        FROM User_Relation ur
        JOIN Users u on u.id = ur.id
        WHERE u.id <> user_id
        ORDER BY ur.relative_score DESC
    );
    
    DROP VIEW IF EXISTS User_Relation_Score;

END;
$$ LANGUAGE PLPGSQL;
