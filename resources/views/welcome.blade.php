<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	{{-- <link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" /> --}}
	<!--plugins-->
	<link href="{{asset('assets')}}/css/simplebar.css" rel="stylesheet" />
	<link href="{{asset('assets')}}/css/perfect-scrollbar.css" rel="stylesheet" />
    <link href="{{asset('assets')}}/css/metisMenu.min.css" rel="stylesheet" />

    <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{asset('assets')}}/css/core.css" rel="stylesheet">

        <!-- Theme Style CSS -->
        <link rel="stylesheet" href="{{asset('assets')}}/css/dark-theme.css" />

</head>

<body>
    <!--wrapper-->
    <div id="app">
    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>

	<script src="{{asset('assets')}}/js/perfect-scrollbar.js"></script>

</body>

</html>
