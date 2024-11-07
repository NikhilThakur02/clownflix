document.querySelector('.btn-watchlist').addEventListener('click', function() {
    alert('Movie added to your watchlist!');
});

document.querySelector('.btn-watch-now').addEventListener('click', function() {
    // Redirect user to the payment page for watching the movie
    window.location.href = '/subscription';
});
