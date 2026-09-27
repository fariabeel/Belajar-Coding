<html>
    <?php
    function pheol($val) {;echo "$val";}

    echo "<table>";

    foreach(filter_list() as $id => $filter) {
        echo "<tr> <td>$filter</td>"."<td>".filter_id($filter)."</td> </tr>";
    }

    echo "</table>";
    ?>
</html>
