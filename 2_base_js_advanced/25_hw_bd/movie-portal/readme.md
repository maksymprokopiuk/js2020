<% for (movie of movies) { %>
    <div class="movie-cardHome">
        <div class="movie-cardHome-container">
            <img src="<%= movie.img %>" alt="<%= movie.title %>">
            <div class="movie-cardHome-title"><h2><%= movie.title %></h2></div>
            <div><%= movie.countries %></div>
            <div><%= movie.year %></div>
            <div class="movie-cardHome-genres"><%= movie.genres %></div>
            <div class="movie-cardHome-description"><%= movie.description %></div>
        </div>
    </div>
<% } %>