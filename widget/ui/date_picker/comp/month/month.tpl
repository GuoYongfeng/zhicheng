<% var list = vars.list, curYear = vars.datetime.date.year, curMonth = vars.datetime.date.month; %>
<div class="ui-month-selector">
	<% for (var i=0,len=list.length; i<len; i++ ) { var item = list[i]; %>
		<% if (curYear == item.year && curMonth == item.month) { %>
		<span class="ui-month selected" data-index="<%= i %>"><%= list[i].month + 1 %>月</span>
		<% } else { %>
		<span class="ui-month" data-index="<%= i %>"><%= list[i].month + 1 %>月</span>
		<% } %>	
	<% } %>
</div>