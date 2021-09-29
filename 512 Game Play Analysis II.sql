# Ensure empty table to start with
DROP TABLE IF EXISTS Activity;

# Set up test data
Create table If Not Exists Activity
(
    player_id    int,
    device_id    int,
    event_date   date,
    games_played int
);
Truncate table Activity;
insert into Activity (player_id, device_id, event_date, games_played)
values ('1', '2', '2016-03-01', '5');
insert into Activity (player_id, device_id, event_date, games_played)
values ('1', '2', '2016-05-02', '6');
insert into Activity (player_id, device_id, event_date, games_played)
values ('1', '3', '2015-06-25', '1');
insert into Activity (player_id, device_id, event_date, games_played)
values ('3', '1', '2016-03-02', '0');
insert into Activity (player_id, device_id, event_date, games_played)
values ('3', '4', '2016-02-03', '5');

# Query to solve problem
SELECT a.player_id, a.device_id
FROM Activity a
         INNER JOIN
     (
         SELECT player_id, device_id, MIN(event_date) event_date
         FROM Activity
         GROUP BY player_id
     ) b
     ON a.player_id = b.player_id AND a.event_date = b.event_date


