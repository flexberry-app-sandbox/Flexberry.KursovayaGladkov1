docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya_gladkov-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya_gladkov-java/app ../../..
