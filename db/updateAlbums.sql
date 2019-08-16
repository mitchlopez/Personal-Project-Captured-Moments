UPDATE albums
SET url = $1
where id = 1;

UPDATE albums
SET url = $2
where id = 2;

UPDATE albums
SET url = $3
WHERE id = 3;

UPDATE albums
SET url = $4
where id = 4;

UPDATE albums
SET url = $5
where album_id = 5;

UPDATE albums
SET url = $6
WHERE album_id = 6;

UPDATE albums
SET offsets = $7
where album_id = 1;

UPDATE albums
SET offsets = $8
where album_id = 2;

UPDATE albums
SET offsets = $9
WHERE album_id = 3;

UPDATE albums
SET offsets = $10
where album_id = 4;

UPDATE albums
SET offsets = $11
where album_id = 5;

UPDATE albums
SET offsets = $12
WHERE album_id = 6;