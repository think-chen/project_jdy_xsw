
  $(".part5_contain_right_top2 .tab li").on("click", function () {
            var that = $(this),
            	index = that.index();
            	parent =  $(".part5_contain_right_top2 .block") 
            that.addClass('active').siblings(that).removeClass('active');
            parent.eq(index).removeClass('none').siblings('.part5_contain_right_top2 .block').addClass('none').trigger("scroll");
        })

    $(".part6 .tabchange ul li").on("click", function () {
            var that = $(this),
                index = that.index();
                parent =  $(".part6_top2") 
            that.addClass('active').siblings(that).removeClass('active');
            parent.eq(index).removeClass('none').siblings('.part6_top2').addClass('none').trigger("scroll");
        })

    $(".part10 .tabchange ul li").on("click", function () {
            var that = $(this),
                index = that.index();
                parent =  $(".part10_top2_tab") 
            that.addClass('active').siblings(that).removeClass('active');
            parent.eq(index).removeClass('none').siblings('.part10_top2_tab').addClass('none').trigger("scroll");
        })
