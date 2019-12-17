/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Source: https://developers.google.com/chart/interactive/docs/quick_start
 * 
 */

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Languages');
        data.addColumn('number', 'usageShare');
        data.addRows([
          ['Javascript', 30],
          ['Swift', 5],
          ['Java', 25],
          ['C/C++', 8],
          ['Python', 35],
          ['PHP', 8],
          ['Ruby', 2],
        ]);

        // Set chart options
        var options = {'title':'Most Popular Programming Languages',
                       'width':800,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
        chart.draw(data, options);
      }

