SELECT COUNT (*)
FROM admin
WHERE admin.username = $1 AND admin.password = $2