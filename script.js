$(document).ready(function() {
   
    var $output = [["In the middle of every difficulty lies opportunity.","Albert Einstein"],
    ["Better to remain silent and be thought a fool than to speak out and remove all doubt.","Maurice Switzer"],
    ["You must be the change you wish to see in the world.","Mahatma Gandhi"],
    ["Imagination is more important than knowledge.","Albert Einstein"],
    ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.","Mark Twain"],
    ["It is always darkest just before the dawn.","Thomas Fuller"],
    ["Without music, life would be a mistake.","Friedrich Nietzsche"],
    ["Go to heaven for the climate and hell for the company.","Mark Twain"],
    ["Dream as if you’ll live forever. Live as if you’ll die today.","James Dean"],
    ["All the world’s a stage, and all the men and women merely players.","William Shakespeare"],
    ["Be kind, for everyone you meet is fighting a hard battle.","Plato"],
    ["Whatever you are, be a good one.","Abraham Lincoln"],
    ["Wherever you go, go with all your heart.","Confucius"],
    ["The best revenge is massive success.","Frank Sinatra"],
    ["If you're going through hell, keep going.","Winston Churchill"],
    ["That which does not kill us makes us stronger.","Friedrich Nietzsche"]
    ];

    var x = Math.floor(Math.random()*$output.length);
    $('#quote').text($output[x][0]).hide();
    $('#author').text('-'+$output[x][1]).hide();
    $('#quote').fadeIn(800);
    $('#author').fadeIn(800);

$('#nextQuote').click(function() {
    var x = Math.floor(Math.random()*$output.length);
    $('#quote').text($output[x][0]).hide();
    $('#author').text('-'+$output[x][1]).hide();
    $('#quote').fadeIn(1000);
    $('#author').fadeIn(1000);
    });
    });
