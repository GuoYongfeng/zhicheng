<% var data = vars; %>
<ul class="ui-datetime-display<%= data.selected?' selected':'' %>">
	<li class="label"><%= data.label %></li>
	<li class="main"><%= data.datetime ? data.datetime : '----' %></li>
</ul>