<% var data = vars, currentYear = parseInt(data.datetime.date.year, 10), lastYear = currentYear - 1, nextYear = currentYear + 1; %>
<div class="ui-year-selector">
	<span class="ui-year" data-value="<%= lastYear %>"><%= lastYear %></span>
	<span class="ui-year selected" data-value="<%= currentYear %>"><%= currentYear %></span>
	<span class="ui-year" data-value="<%= nextYear %>"><%= nextYear %></span>
</div>