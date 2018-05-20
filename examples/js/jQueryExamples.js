var loadJQueryExamples = function ($) {

    const runFirstExamples = () => {
        // Select DOM element
        const h1Element = $('h1')

        // Get the first element
        const firstElement = $('p').first()

        // Set text of element
        firstElement.text('jQuery changed me after clicking the button')

         // Create an element
        const textElement = $('<p>')

        // Set attribute for element
        textElement.attr("data-hook", "newText");

        // Set text to an element
        textElement.text('This is a new <p> element created by jQuery')

        // Append element to DOM
        $('body').append(textElement)
    };

    const runSecondExamples = () => {
        // Check if the element exists
        if ($('p#text').length > 0) {
            console.log('<p> Element exits')
        } else {
            console.log('No <p> Element found')
        }

        // Remove llst <p> element from DOM
        $('p#text').remove()
        
        // Append items with inner HTML content to a list
        const list = $('#list')
        const item = $('<li>')
        const itemContent = $('<h3>')
        itemContent.text('I am an Item Text')
        item.html(itemContent)
        list.append(item)

        // Access CSS Object Model and change styles
        $('h1').css('color', 'blue')
        $('h1').css('font-size', '72px')

        // Add a class to an object
        $('p[data-hook=newText]').last().addClass('mark-text');

        // Attach an event listener
        $('#animateCircle').on('click', e => moveCircle(e))
    };

    // OnClick Event with event arguments
    const moveCircle = (e) => {
        console.log(e.target);
        $('#circleButton').off('click')
        for(i=0; i<10; i++) {
            setTimeout(() => {
                $('circle')
            }, 200)
        }
    }

    $(document).ready(() => {    
        $('#activateButton1').on('click', () => runFirstExamples())
        $('#activateButton2').on('click', () => runSecondExamples())
    });
};