
export function clean(){
    while (document.contains(document.getElementById("container_characters"))) {
        document.getElementById("container_characters").remove();
    }
    
}