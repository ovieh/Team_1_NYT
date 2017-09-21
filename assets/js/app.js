$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var numberOfRecords = "5";
        var searchTerm = 'q:' + $(term).val().trim();
        var startYear = 'begin_date:' + $(start_year).val().trim();
        var endYear = 'end_date:' + $(end_year).val().trim();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "e8718dd97c2d4ed4b2555c6c310c1963",
            searchTerm,
            startYear,
            endYear
<<<<<<< HEAD
=======

>>>>>>> 981b51c8b0dd0f0a33c8717e55a37446d8f0ac70

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            var dataArray = result.response.docs;
            for (var i = 0; i < dataArray.length; i++) {
                var articleDiv = $("<div>");
                var articleTitleDiv = $("<div>" + (i + 1) + dataArray[i].headline.main + "</div>");
                var authorDiv = $("<div>" + (i + 1) + dataArray[i].byline.original + "</div>");
                var sectionDiv = $("<div>" + dataArray[i].section_name + "</div>");
                var pubDateDiv = $("<div>" + dataArray[i].pub_date + "</div>");

                var hyperLinkDiv = $("<a href=" + dataArray[i].web_url + ">link text</a>");

                articleDiv.append(articleTitleDiv);
                articleDiv.append(authorDiv);
                articleDiv.append(sectionDiv);
                articleDiv.append(pubDateDiv);
                articleDiv.append(hyperLinkDiv);

                $("#article").append(articleDiv);
                console.log(articleDiv);

            }



        }).fail(function (err) {
            throw err;
        });



    });



});