CREATE OR REPLACE FUNCTION Count_Relation(user1 INTEGER, user2 INTEGER) RETURNS NUMERIC
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



CREATE OR REPLACE FUNCTION Relation_Ranking(user_id INTEGER) RETURNS TABLE (
    name TEXT, sex INTEGER, age INTEGER,
    image_url TEXT, self_intro TEXT,
    city TEXT, town TEXT,
    relative_score NUMERIC
)
AS $$
BEGIN

    EXECUTE format('
        CREATE OR REPLACE VIEW User_Relation_Score AS
        SELECT id, Count_Relation(%L, id) as relative_score
        FROM Users', user_id);
    
    RETURN QUERY (
        SELECT u.user_name, u.sex, u.age, u.image_url, u.self_intro, u.city, u.town, urs.relative_score
        FROM User_Relation_Score urs
        JOIN Users u on u.id = urs.id
        WHERE u.id <> user_id
        ORDER BY urs.relative_score DESC
    );
    
    DROP VIEW IF EXISTS User_Relation_Score;

END;
$$ LANGUAGE PLPGSQL;

