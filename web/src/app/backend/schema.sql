CREATE TABLE Users (
    -- basic info
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    real_name TEXT NOT NULL,
    sex INTEGER CHECK (sex IN (1, 2)),
    age INTEGER CHECK (age > 0),
    image_url TEXT,
    self_intro TEXT,

    -- residential  address
    city TEXT,
    town TEXT,

    -- current location
    longitude NUMERIC CHECK (longitude <= 180 AND longitude >= -180),
    latitude NUMERIC CHECK (latitude <= 90 AND latitude >= -90),
    
    -- perference [art, tech, sport, life, music, movie]
    perference_score INTEGER[] DEFAULT ARRAY[0, 0, 0, 0, 0, 0],

    -- event
    favorite_event INTEGER,
    interest_event INTEGER,
    event_history_id INTEGER[]
);


CREATE TYPE Event_Type AS ENUM (
    'Art',
    'Technology',
    'Sport',
    'Life',
    'Music',
    'Movie'
);

CREATE TABLE Events (
    -- basic info
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    event_url TEXT,
    event_type Event_Type,
    place TEXT,
    start_date DATE,
    end_date DATE 
);


CREATE TABLE Friend_Relationship (
    user1 INTEGER REFERENCES Users(id),
    user2 INTEGER REFERENCES Users(id)
);