SELECT comment, comment_id
FROM comments
WHERE photo_id = $1
ORDER BY comment_id
DESC
LIMIT 10