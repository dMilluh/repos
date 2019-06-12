<?php include "includes/header.php" ?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src=""></script>
<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-128593723-1');
</script>

<div ng-app="blackWolfApp">
    <div class="container" style="padding-top: 80px">
        <div ng-view></div>
    </div>
</div>

<?php include "includes/footer.php" ?>