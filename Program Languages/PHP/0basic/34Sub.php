<!DOCTYPE html>
<html>
    <style>
        table, tr, th, td {
            border: 1px solid;
            border-collapse: collapse;
        }

        th {
            padding: 10px;
            width: 100px;
        }
    </style>
    <table>
        <tr><th>Car</th> <th>Instock</th> <th>Sold</th></tr>
        <?php
        $arr = [['Volvo',22,18], ['BMW',15,13], ['Saab',5,2], ['LandRover',17,15]];
        foreach($arr as $i) {
            echo "<tr><td>$i[0]</td> <td>$i[1]</td> <td>$i[2]</td></tr>";
        }
        ?>
    </table>
</html>