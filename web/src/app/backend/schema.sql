CREATE TABLE Users (
    -- basic info
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    real_name TEXT NOT NULL,
    sex INTEGER CHECK (sex IN (1, 2)),
    image_url TEXT,

    
    -- location
    longitude NUMERIC CHECK (longitude <= 180 AND longitude >= -180),
    latitude NUMERIC CHECK (latitude <= 90 AND latitude >= -90),
    
    -- perference
    score INTEGER[] DEFAULT
    art_score INTEGER DEFAULT 0,
    tech_score INTEGER DEFAULT 0,
    sport_score INTEGER DEFAULT 0,
    garden_score INTEGER DEFAULT 0,
    music_score INTEGER DEFAULT 0,
    movie_score INTEGER DEFAULT 0,

    -- history
);

CREATE TABLE Events (
    -- basic info
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    event_url TEXT,

    -- type
);