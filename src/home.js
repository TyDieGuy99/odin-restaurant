export function getHomePage(container) {
    const heading = document.createElement('h2');
    heading.innerHTML = 'We love burgers here.<br> ' + 
    'No seriously, we love them so much about 90% of the food here is burgers or goes with burgers.<br>' +
    'Any burger you can think of, we have it<br>' +
    'Any meat, any cheese, any bun, any topping, we have it<br>' +
    'Don\'t like our crazy prebuilt burger options?<br>' +
    'Make your own, and live out your wildest burger dreams.';
    container.appendChild(heading);
}