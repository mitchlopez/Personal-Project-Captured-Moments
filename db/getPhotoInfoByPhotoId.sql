SELECT photos.photo_id, photos.url, photos.description, comments.comment
FROM comments
    INNER JOIN photos
    ON comments.photo_id=photos.photo_id
WHERE comments.photo_id = 1