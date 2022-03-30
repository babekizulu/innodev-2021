if ($(window).width() > 770) {
    const
        home_nav = $('#home'),
        manu_nav = $('#manufacturing'),
        consult_nav = $('#consultancy'),
        training_nav = $('#training'),
        manu_card = $('#manu_card'),
        consult_card = $('#consult_card'),
        training_card = $('#training_card'),
        manu_info = $('#manu_info'),
        consult_info = $('#consult_info'),
        training_info = $('#training_info'),
        search = $('#search'),
        search_query = $('.search-query'),
        home_section = $('#home_section');

    manu_info.hide();
    consult_info.hide();
    training_info.hide();
    // //Change Search Bar Background Color on Click 
    // search.on('click', () => {
    //     search.toggle(search_query);
    // })

    //A Function to Toggle Information on Card Click
    function toggleInfo(card, info, alt_info_1, alt_info_2) {
        card.on('click', () => {
            info.toggle();
            alt_info_1.hide()
            alt_info_2.hide()
        })
    }

    toggleInfo(manu_card, manu_info, consult_info, training_info);
    toggleInfo(consult_card, consult_info, manu_info, training_info);
    toggleInfo(training_card, training_info, consult_info, manu_info);
    toggleInfo(manu_nav, manu_info, consult_info, training_info);
    toggleInfo(consult_nav, consult_info, manu_info, training_info);
    toggleInfo(training_nav, training_info, consult_info, manu_info);

    home_nav.on('click', () => {
        manu_info.hide();
        consult_info.hide();
        training_info.hide();
    })

    //-------------------------------------------------------------------

    // An offset to push the content down from the top.
    const my_offset = 200;

    //Anchor Function
    function anchor(current, destination, my_offset) {
        current.on(click, (e) => {
            // Our scroll target : the top position of the
            // section that has the id referenced by our href.
            var target = destination.offset().top - my_offset;

            // The magic...smooth scrollin' goodness.
            $('html, body').animate({ scrollTop: target }, 500);

            //prevent the page from jumping down to our section.

            e.preventDefault();
        });
    }

    anchor(manu_card, manu_info, my_offset);
    anchor(consult_card, consult_info, my_offset);
    anchor(training_card, training_info, my_offset);
    anchor(home_nav, home_section, my_offset)
    anchor(manu_nav, manu_info, my_offset);
    anchor(consult_nav, consult_info, my_offset);
    anchor(training_nav, training_info, my_offset);
    //---------------------------------------------------------------

    // //Search Bar Functionality
    // const search_results_array = ['home', 'manufacturing', 'consultancy', 'training'];

    // function search_bar(search, results_array) {
    //     search.toLowerCase();
    //     if (search === 'home') {

    //     }
    // }
}