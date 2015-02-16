/**
 *	Project			:	Commune Member Management
 *	Date			:	15-Jan-2015
 *	Developer		:	Tepken Vannkorn
 *	Developer URI	:	http://vannkorn.info
 */

$( function() {
	var Commune = {
		init: function() {
			this.loadPieChart();
			this.widgetMinimize();
		},
		
		widgetMinimize: function() {
			$('.wminimize').click(function(e){
				e.preventDefault();
				var $wcontent = $(this).parent().parent().next('.widget-content');
				if($wcontent.is(':visible')) 
				{
				  $(this).children('i').removeClass('fa fa-chevron-up');
				  $(this).children('i').addClass('fa fa-chevron-down');
				}
				else 
				{
				  $(this).children('i').removeClass('fa fa-chevron-down');
				  $(this).children('i').addClass('fa fa-chevron-up');
				}            
				$wcontent.toggle(500);
			});
		},
		
		loadPieChart: function() {
			var data = [];
			var series = 2;
			for ( var i = 0; i < series; i++ ) {
				data[i] = { label: "Series" + ( i + 1 ), data: Math.floor( Math.random() * 100 ) + 1 }
			}

			$.plot($("#pie-chart"), data, {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 3/4,
							formatter: function( label, series ) {
								return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
							},
							background: { opacity: 0 }
						}
					}
				},
				grid: {hoverable: true},
				legend: {
					show: false
				}
			}); 

			$.plot($("#pie-chart2"), data, {
				series: {
					pie: {
						show: true
					}
				},
				grid: {hoverable: true}
			});
		}
	}
	
	$( document ).ready( function() {
		Commune.init();
	});
}); 