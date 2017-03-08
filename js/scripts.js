$(document).ready(function(){
    $(".nav-link").click(function(){
        if ($(this).hasClass('active')){
            $('#' + this.hash.substr(1).toLowerCase()).toggleClass('active');
        }
    });
});



//Member Form

$(document).ready(function(){

    $('#memberButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $('#display1').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#memberForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (posted) {

                            $('#display2').html("RESULT ==>  " + (JSON.stringify(posted.result.message)));
                            console.log("The response is :  " + JSON.stringify(posted));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});


//Member Search

$(document).ready(function(){

    $('#memberSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                       // data : $('#memberSearchForm').val(),
                        data : $('#memberSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {
                             $('#display3').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                           console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});









//Care Manager Form

$(document).ready(function(){

    $('#caremanagerButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $('#display3').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#caremanagerForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (posted) {

                            $('#display4').html("RESULT ==>  " + (JSON.stringify(posted.result.message)));
                            console.log("The response is :  " + JSON.stringify(posted));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});


//Care Manager Search

$(document).ready(function(){

    $('#caremanagerSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    // $('#display1').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#caremanagerSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            $('#display5').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});





//Care Giver Form

$(document).ready(function(){

    $('#caregiverButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    $('#display6').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "POST",
                        data : $('#caregiverForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (posted) {

                            $('#display6').html("SEARCH RESULT ==>  " + (JSON.stringify(posted.result.message)));
                            console.log("The response is :  " + JSON.stringify(posted));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});



//Care Giver search

$(document).ready(function(){

    $('#caregiverSearchButton').click(function(e){

        e.preventDefault();
        $.ajax({
            url: "https://identity-qa.cch.healthcare:9031/as/token.oauth2?grant_type=password&scope=cloudmineProvisioning&username=csr&password=Unb0undID",
            type: "POST",
            dataType: "json",
            crossDomain: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                Accept : "application/json; charset=utf-8",
                Authorization:"Basic Y2xvdWRtaW5lOktRSGg2UEFBTUF2VnVuTzQ2V0tQNjJZNXhqN012ang2N3d0QzBpZ2J5eTdSVXk4bnhzRTBTd1AzTzU3M1UyVWk="
            },
            success: function (data) {

                if(data != " "  || null){
                    // $('#display1').html(data.access_token);
                    $.ajax({
                        url: "https://api.secure.cloudmine.me/v1/app/96fc95210061884d1aab3e4204ff3a1e/run/user",
                        type: "GET",
                        // data : $('#memberSearchForm').val(),
                        data : $('#caregiverSearchForm').serializeJSON(),
                        dataType: "json",
                        crossDomain: true,
                        headers : {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                            'x-cloudmine-apikey' : '0ac9bec7ea0a4d79a92a5e503f3c44b6',
                            'x-cloudmine-sessiontoken' : data.access_token
                        },
                        success: function (response) {

                            $('#display7').html("SEARCH RESULT ==>  " + (JSON.stringify(response.result.message)));
                            console.log("The response is :  " + JSON.stringify(response));

                        }

                    });

                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });

});

