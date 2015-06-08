<% 
var data = vars;
var Util = data.util, 
	datetime = data.datetime,
	limit = data.limit,
	isLimited = data.isLimited;
%>
<ul class="ui-time-picker">	
	<li class="ui-time-btn clearfix">
		<div class="hour-add">+</div>		
		<div class="minute-add">+</div>
	</li>
	<li class="ui-time-display <%= isLimited ? 'limited' : '' %> clearfix">
		<div class="hour"><%= Util.formatPadLeft(datetime.time.hour) %></div>
		<div class="spliter">:</div>
		<div class="minute"><%= Util.formatPadLeft(datetime.time.minute) %></div>
	</li>
	<li class="ui-time-btn clearfix">
		<div class="hour-sub">-</div>		
		<div class="minute-sub">-</div>
	</li>
	<% if(limit && limit.info) { %>
	<li class="ui-time-limitinfo">
		该天<%= limit.info %>不可租用
	</li>
	<% } %>
</ul>