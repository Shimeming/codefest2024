CREATE TABLE Users (
    -- basic info
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    real_name TEXT NOT NULL,
    sex INTEGER CHECK (sex IN (1, 2)),
    age INTEGER CHECK (age > 0),
    image1 TEXT,
    image2 TEXT,
    image3 TEXT,
    motto TEXT,

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

CREATE TABLE Subscriptions (
    subscriber INTEGER REFERENCES Users(id),
    subscribee INTEGER REFERENCES Users(id),
    PRIMARY KEY (subscriber, subscribee)
);

CREATE TABLE Group (
    event_id INTEGER REFERENCES Events(id),
    name TEXT NOT NULL,
    owner INTEGER REFERENCES Users(id),
    desired_date Date,
    member INTEGER[],
    pending INTEGER[],
    max_num INTEGER
);
