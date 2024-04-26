let a = angular.module("myapp",[]);
a.controller("ctrl",function($scope){
    $scope.books=[
        "A Game of Thrones",
        "A Tale of Two Cities",
        "Animal Farm",
        
        "Brave New World",
        "The Brothers Karamazov",
        "The Book Thief",
        
        "Crime and Punishment",
        "Catch-22",
        "The Count of Monte Cristo",
        
        "Dune",
        "Dracula",
        "The Da Vinci Code",
        
        "Emma",
        "East of Eden",
        "Ender's Game",
        
        "Fahrenheit 451",
        "Frankenstein",
        "The Fault in Our Stars",
        
        "The Great Gatsby",
        "Gone with the Wind",
        "The Grapes of Wrath",
        
        "Harry Potter and the Sorcerer's Stone",
        "The Hobbit",
        "Heart of Darkness",
        
        "The Iliad",
        "Inferno",
        "Invisible Man",
        
        "Jane Eyre",
        "Jurassic Park",
        "Jonathan Strange & Mr. Norrell",
        
        "Kafka on the Shore",
        "The Kite Runner",
        "The Kitchen God's Wife",
        
        "Les Misérables",
        "The Lord of the Rings",
        "Lolita",
        
        "Moby-Dick",
        "The Metamorphosis",
        "The Martian",
        
        "Nineteen Eighty-Four",
        "Northanger Abbey",
        "Native Son",
        
        "The Odyssey",
        "Of Mice and Men",
        "On the Road",
        
        "Pride and Prejudice",
        "The Picture of Dorian Gray",
        "The Pearl",
        
        "The Queen of the Damned",
        "The Quiet American",
        "Quicksilver",
        
        "Romeo and Juliet",
        "Rebecca",
        "The Road",
        
        "Slaughterhouse-Five",
        "The Scarlet Letter",
        "The Secret Garden",
        
        "To Kill a Mockingbird",
        "The Three Musketeers",
        "The Time Machine",
        
        "Ulysses",
        "Uncle Tom's Cabin",
        "The Unbearable Lightness of Being",
        
        "Vanity Fair",
        "The Velveteen Rabbit",
        "Veronika Decides to Die",
        
        "War and Peace",
        "Wuthering Heights",
        "The Wind-Up Bird Chronicle",
        
        "Xenocide",
        "Xingu",
        "Xanadu",
        
        "Year of Wonders",
        "You Can't Go Home Again",
        "The Yellow Wallpaper",
        
        "Zen and the Art of Motorcycle Maintenance",
        "The Zookeeper's Wife",
        "Zorba the Greek"
    ];
    
    $scope.swl = function(book){
        if($scope.nikhil && $scope.nikhil.trim() !== ""){
            return book.toLowerCase().charAt(0) === $scope.nikhil.toLowerCase();
        }
        else{
            return true;
        }
    }
}
)