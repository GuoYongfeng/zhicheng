<%
var data = vars;
var weekdays = data.conf,
	val = data.val, 
	range = data.range,
	datetime = data.datetime,
	limits = data.limits, 
	list = data.list, 
	countColum = weekdays.length,
	countDays = list.dayLast.getDate(), 
	offsetDay = list.dayFirst.getDay(),
	intRowsCount = Math.ceil((offsetDay+countDays)/countColum), 
	idx = 0; 
%>
<div class="ui-date-selector">
	<table class="ui-calendar">
		<tr>
			<% for (var n = 0; n < countColum; n++ ) { %>
			<td class="ui-date-week">
				<span class="ui-date-value"><%= weekdays[n] %></span>
			</td>
			<% } %>
		</tr>
		<% for (var row = 0; row < intRowsCount; row++) { %>
		<tr>
			<% for (var col = 0; col < countColum; col++) { %>
				<% idx = row * countColum + col; %>
				<% if (idx < offsetDay || (idx - offsetDay) >= countDays) { %>
					<td class="ui-date"></td>
				<% } else { %>
					<% 
					var cellClassName = ['ui-date'];
					var cellDate = new Date(datetime.date.year, datetime.date.month, (idx - offsetDay + 1));
					var cellMs = cellDate.getTime();
					if (cellMs >= range.min.date.ms && cellMs <= range.max.date.ms) {
						var limit = limits ? limits[cellMs] : null;	
						if (limit) {							
							if (limit.status) {
								cellClassName.push('rent');
								if (limit.status == 1) {
									cellClassName.push('rent-part');
								} else {
									cellClassName.push('rent-all');
									if (cellDate.getFullYear() == val.date.year && cellDate.getMonth() == val.date.month && cellDate.getDate() == val.date.date) {
										cellClassName.push('selected'); 			
									}
								}												 
							} else {
								cellClassName.push('rent-no');
							}
						} else {
							cellClassName.push('rent');
							cellClassName.push('rent-all');
							if (cellDate.getFullYear() == val.date.year && cellDate.getMonth() == val.date.month && cellDate.getDate() == val.date.date) {
								cellClassName.push('selected'); 			
							}
						}							
					} 								
					%>
					<td class="<%= cellClassName.join(' ') %>" data-value="<%= cellDate.getDate() %>">
						<span class="ui-date-value">
							<span class="inner"><%= cellDate.getDate() %></span>
						</span>
					</td>
				<% } %>
			<% } %>
		</tr>		
		<% } %>
	</table>
	<% if (limits) { %>
	<div class="ui-date-selector-info">
		<p class="item">
			全天不可租：<span class="rent-no">&nbsp;</span>
		</p>
		<p class="item">
			部分时间不可租：<span class="rent-part">&nbsp;</span>
		</p>
	</div>
	<% } %>
</div>