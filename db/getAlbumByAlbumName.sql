SELECT photos.photo_id, photos.url, photos.description
from photos
    inner join albums
    on albums.album_id = photos.album_id
where albums.album_name = $1