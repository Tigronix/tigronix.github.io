"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-arrow-forward" viewBox="0 0 20 20"><title>arrow-forward</title><path d="M10 3.333l-1.175 1.175 4.65 4.658h-10.142v1.667h10.142l-4.65 4.658 1.175 1.175 6.667-6.667z"></path></symbol><symbol id="icon-ruble-sign" viewBox="0 0 15 20"><title>ruble-sign</title><path d="M9.35 12.5c3.325 0 5.65-2.323 5.65-5.661s-2.325-5.589-5.65-5.589h-6.381c-0.259 0-0.469 0.21-0.469 0.469v8.072h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.772c0 0.259 0.21 0.469 0.469 0.469h2.031v1.25h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.563c0 0.259 0.21 0.469 0.469 0.469h2.031v2.031c0 0.259 0.21 0.469 0.469 0.469h2.287c0.259 0 0.469-0.21 0.469-0.469v-2.031h6.306c0.259 0 0.469-0.21 0.469-0.469v-1.563c0-0.259-0.21-0.469-0.469-0.469h-6.306v-1.25h3.625zM5.725 3.935h3.075c1.825 0 2.925 1.137 2.925 2.903 0 1.79-1.1 2.952-2.975 2.952h-3.025v-5.855z"></path></symbol><symbol id="icon-check" viewBox="0 0 20 20"><title>check</title><path d="M6.793 17.164l-6.5-6.5c-0.391-0.391-0.391-1.024 0-1.414l1.414-1.414c0.391-0.391 1.024-0.391 1.414 0l4.379 4.379 9.379-9.379c0.391-0.391 1.024-0.391 1.414 0l1.414 1.414c0.391 0.391 0.391 1.024 0 1.414l-11.5 11.5c-0.391 0.391-1.024 0.391-1.414-0z"></path></symbol><symbol id="icon-comment-alt" viewBox="0 0 23 20"><title>comment-alt</title><path d="M22.5 9.375c0 4.492-5.039 8.125-11.25 8.125-1.887 0-3.668-0.336-5.23-0.93-1.574 1.219-3.508 1.965-5.563 2.176-0.203 0.023-0.398-0.109-0.449-0.301-0.051-0.195 0.105-0.316 0.258-0.461 0.754-0.719 1.668-1.281 2.027-3.695-1.438-1.363-2.293-3.066-2.293-4.914 0-4.488 5.039-8.125 11.25-8.125s11.25 3.637 11.25 8.125zM6.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875zM11.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875zM16.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875z"></path></symbol><symbol id="icon-star" viewBox="0 0 23 20"><title>star</title><path d="M10.129 0.695l-2.551 5.172-5.707 0.832c-1.023 0.148-1.434 1.41-0.691 2.133l4.129 4.023-0.977 5.684c-0.176 1.027 0.906 1.797 1.813 1.316l5.105-2.684 5.105 2.684c0.906 0.477 1.988-0.289 1.813-1.316l-0.977-5.684 4.129-4.023c0.742-0.723 0.332-1.984-0.691-2.133l-5.707-0.832-2.551-5.172c-0.457-0.922-1.781-0.934-2.242 0z"></path></symbol><symbol id="icon-access-alarm" viewBox="0 0 20 20"><title>access-alarm</title><path d="M18.333 4.767l-3.833-3.217-1.075 1.275 3.833 3.217 1.075-1.275zM6.567 2.825l-1.067-1.275-3.833 3.208 1.075 1.275 3.825-3.208zM10.417 6.667h-1.25v5l3.958 2.375 0.625-1.025-3.333-1.975v-4.375zM10 3.333c-4.142 0-7.5 3.358-7.5 7.5s3.35 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM10 16.667c-3.225 0-5.833-2.608-5.833-5.833s2.608-5.833 5.833-5.833 5.833 2.608 5.833 5.833-2.608 5.833-5.833 5.833z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-all-out" viewBox="0 0 20 20"><title>all-out</title><path d="M13.508 3.467l3.333 3.333v-3.333zM16.842 13.467l-3.333 3.333h3.333zM6.842 16.8l-3.333-3.333v3.333zM3.508 6.8l3.333-3.333h-3.333zM14.3 6.008c-2.275-2.275-5.975-2.275-8.25 0s-2.275 5.975 0 8.25 5.975 2.275 8.25 0 2.275-5.967 0-8.25zM13.383 13.342c-1.775 1.775-4.642 1.775-6.417 0s-1.775-4.642 0-6.417 4.642-1.775 6.417 0 1.775 4.642 0 6.417z"></path></symbol><symbol id="icon-content-paste" viewBox="0 0 20 20"><title>content-paste</title><path d="M15.833 1.667h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v13.333c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-13.333c0-0.917-0.75-1.667-1.667-1.667zM10 1.667c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM15.833 16.667h-11.667v-13.333h1.667v2.5h8.333v-2.5h1.667v13.333z"></path></symbol><symbol id="icon-local-shipping" viewBox="0 0 20 20"><title>local-shipping</title><path d="M16.667 6.667h-2.5v-3.333h-11.667c-0.917 0-1.667 0.75-1.667 1.667v9.167h1.667c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h1.667v-4.167l-2.5-3.333zM5 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM16.25 7.917l1.633 2.083h-3.717v-2.083h2.083zM15 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 20 20"><title>location-on</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-payment" viewBox="0 0 20 20"><title>payment</title><path d="M16.667 3.333h-13.333c-0.925 0-1.658 0.742-1.658 1.667l-0.008 10c0 0.925 0.742 1.667 1.667 1.667h13.333c0.925 0 1.667-0.742 1.667-1.667v-10c0-0.925-0.742-1.667-1.667-1.667zM16.667 15h-13.333v-5h13.333v5zM16.667 6.667h-13.333v-1.667h13.333v1.667z"></path></symbol><symbol id="icon-person-pin" viewBox="0 0 20 20"><title>person-pin</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 4.417c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zM15 13.333h-10v-0.75c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.75z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 20 20"><title>phone-in-talk</title><path d="M16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 10h1.667c0-4.142-3.358-7.5-7.5-7.5v1.667c3.225 0 5.833 2.608 5.833 5.833zM12.5 10h1.667c0-2.3-1.867-4.167-4.167-4.167v1.667c1.383 0 2.5 1.117 2.5 2.5z"></path></symbol><symbol id="icon-playlist-add-check" viewBox="0 0 20 20"><title>playlist-add-check</title><path d="M11.667 8.333h-10v1.667h10v-1.667zM11.667 5h-10v1.667h10v-1.667zM1.667 13.333h6.667v-1.667h-6.667v1.667zM17.917 9.583l1.25 1.25-5.825 5.833-3.758-3.75 1.25-1.25 2.508 2.5 4.575-4.583z"></path></symbol><symbol id="icon-spa" viewBox="0 0 20 20"><title>spa</title><path d="M7.125 10c-0.892-0.592-1.875-1.058-2.942-1.342 1.067 0.283 2.050 0.75 2.942 1.342zM15.817 8.658c-1.075 0.283-2.075 0.758-2.975 1.367 0.9-0.608 1.9-1.083 2.975-1.367z"></path><path d="M12.908 8.025c-0.15-2.325-1.092-4.592-2.858-6.358-1.783 1.783-2.767 4.050-2.958 6.358 1.067 0.567 2.050 1.3 2.908 2.192 0.858-0.883 1.842-1.617 2.908-2.192zM7.492 10.233c-0.117-0.083-0.25-0.158-0.375-0.242 0.125 0.092 0.258 0.158 0.375 0.242zM12.842 10.025c-0.108 0.075-0.225 0.133-0.333 0.217 0.108-0.083 0.225-0.142 0.333-0.217zM10 12.875c-1.792-2.733-4.85-4.542-8.333-4.542 0 4.433 2.8 8.183 6.692 9.575 0.525 0.192 1.075 0.333 1.642 0.425 0.567-0.1 1.108-0.242 1.642-0.425 3.892-1.392 6.692-5.142 6.692-9.575-3.483 0-6.542 1.808-8.333 4.542z"></path></symbol><symbol id="icon-star-border" viewBox="0 0 20 20"><title>star-border</title><path d="M18.333 7.7l-5.992-0.517-2.342-5.517-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942zM10 12.833l-3.133 1.892 0.833-3.567-2.767-2.4 3.65-0.317 1.417-3.358 1.425 3.367 3.65 0.317-2.767 2.4 0.833 3.567-3.142-1.9z"></path></symbol><symbol id="icon-tram" viewBox="0 0 20 20"><title>tram</title><path d="M15.833 14.117v-7.033c0-2.325-2.175-2.833-5.008-2.908l0.633-1.258h2.708v-1.25h-8.333v1.25h3.958l-0.633 1.267c-2.608 0.075-4.992 0.592-4.992 2.9v7.033c0 1.208 0.992 2.217 2.158 2.475l-1.325 1.325v0.417h1.858l1.667-1.667h3.142l1.667 1.667h1.667v-0.417l-1.25-1.25h-0.067c1.408 0 2.15-1.142 2.15-2.55zM10 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.167 11.667h-8.333v-4.167h8.333v4.167z"></path></symbol><symbol id="icon-turned-in-not" viewBox="0 0 20 20"><title>turned-in-not</title><path d="M14.167 2.5h-8.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 13.333 5.833-2.5 5.833 2.5v-13.333c0-0.917-0.75-1.667-1.667-1.667zM14.167 15l-4.167-1.817-4.167 1.817v-10.833h8.333v10.833z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 20 20"><title>keyboard-arrow-right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-arrow-forward2" viewBox="0 0 20 20"><title>arrow-forward2</title><path d="M10 3.333l-1.175 1.175 4.65 4.658h-10.142v1.667h10.142l-4.65 4.658 1.175 1.175 6.667-6.667z"></path></symbol><symbol id="icon-ruble-sign2" viewBox="0 0 15 20"><title>ruble-sign2</title><path d="M9.35 12.5c3.325 0 5.65-2.323 5.65-5.661s-2.325-5.589-5.65-5.589h-6.381c-0.259 0-0.469 0.21-0.469 0.469v8.072h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.772c0 0.259 0.21 0.469 0.469 0.469h2.031v1.25h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.563c0 0.259 0.21 0.469 0.469 0.469h2.031v2.031c0 0.259 0.21 0.469 0.469 0.469h2.287c0.259 0 0.469-0.21 0.469-0.469v-2.031h6.306c0.259 0 0.469-0.21 0.469-0.469v-1.563c0-0.259-0.21-0.469-0.469-0.469h-6.306v-1.25h3.625zM5.725 3.935h3.075c1.825 0 2.925 1.137 2.925 2.903 0 1.79-1.1 2.952-2.975 2.952h-3.025v-5.855z"></path></symbol><symbol id="icon-ruble-sign3" viewBox="0 0 15 20"><title>ruble-sign3</title><path d="M9.35 12.5c3.325 0 5.65-2.323 5.65-5.661s-2.325-5.589-5.65-5.589h-6.381c-0.259 0-0.469 0.21-0.469 0.469v8.072h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.772c0 0.259 0.21 0.469 0.469 0.469h2.031v1.25h-2.031c-0.259 0-0.469 0.21-0.469 0.469v1.563c0 0.259 0.21 0.469 0.469 0.469h2.031v2.031c0 0.259 0.21 0.469 0.469 0.469h2.287c0.259 0 0.469-0.21 0.469-0.469v-2.031h6.306c0.259 0 0.469-0.21 0.469-0.469v-1.563c0-0.259-0.21-0.469-0.469-0.469h-6.306v-1.25h3.625zM5.725 3.935h3.075c1.825 0 2.925 1.137 2.925 2.903 0 1.79-1.1 2.952-2.975 2.952h-3.025v-5.855z"></path></symbol><symbol id="icon-check2" viewBox="0 0 20 20"><title>check2</title><path d="M6.793 17.164l-6.5-6.5c-0.391-0.391-0.391-1.024 0-1.414l1.414-1.414c0.391-0.391 1.024-0.391 1.414 0l4.379 4.379 9.379-9.379c0.391-0.391 1.024-0.391 1.414 0l1.414 1.414c0.391 0.391 0.391 1.024 0 1.414l-11.5 11.5c-0.391 0.391-1.024 0.391-1.414-0z"></path></symbol><symbol id="icon-comment-alt2" viewBox="0 0 23 20"><title>comment-alt2</title><path d="M22.5 9.375c0 4.492-5.039 8.125-11.25 8.125-1.887 0-3.668-0.336-5.23-0.93-1.574 1.219-3.508 1.965-5.563 2.176-0.203 0.023-0.398-0.109-0.449-0.301-0.051-0.195 0.105-0.316 0.258-0.461 0.754-0.719 1.668-1.281 2.027-3.695-1.438-1.363-2.293-3.066-2.293-4.914 0-4.488 5.039-8.125 11.25-8.125s11.25 3.637 11.25 8.125zM6.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875zM11.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875zM16.25 7.5c-1.035 0-1.875 0.84-1.875 1.875s0.84 1.875 1.875 1.875 1.875-0.84 1.875-1.875-0.84-1.875-1.875-1.875z"></path></symbol><symbol id="icon-comment" viewBox="0 0 23 20"><title>comment</title><path d="M22.5 9.375c0 4.492-5.039 8.125-11.25 8.125-1.887 0-3.668-0.336-5.23-0.93-1.574 1.219-3.508 1.965-5.563 2.176-0.203 0.023-0.398-0.109-0.449-0.301-0.051-0.195 0.105-0.316 0.258-0.461 0.754-0.719 1.668-1.281 2.027-3.695-1.438-1.363-2.293-3.066-2.293-4.914 0-4.488 5.039-8.125 11.25-8.125s11.25 3.637 11.25 8.125z"></path></symbol><symbol id="icon-star2" viewBox="0 0 23 20"><title>star2</title><path d="M10.129 0.695l-2.551 5.172-5.707 0.832c-1.023 0.148-1.434 1.41-0.691 2.133l4.129 4.023-0.977 5.684c-0.176 1.027 0.906 1.797 1.813 1.316l5.105-2.684 5.105 2.684c0.906 0.477 1.988-0.289 1.813-1.316l-0.977-5.684 4.129-4.023c0.742-0.723 0.332-1.984-0.691-2.133l-5.707-0.832-2.551-5.172c-0.457-0.922-1.781-0.934-2.242 0z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-access-alarm2" viewBox="0 0 20 20"><title>access-alarm2</title><path d="M18.333 4.767l-3.833-3.217-1.075 1.275 3.833 3.217 1.075-1.275zM6.567 2.825l-1.067-1.275-3.833 3.208 1.075 1.275 3.825-3.208zM10.417 6.667h-1.25v5l3.958 2.375 0.625-1.025-3.333-1.975v-4.375zM10 3.333c-4.142 0-7.5 3.358-7.5 7.5s3.35 7.5 7.5 7.5c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zM10 16.667c-3.225 0-5.833-2.608-5.833-5.833s2.608-5.833 5.833-5.833 5.833 2.608 5.833 5.833-2.608 5.833-5.833 5.833z"></path></symbol><symbol id="icon-access-time2" viewBox="0 0 20 20"><title>access-time2</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-all-out2" viewBox="0 0 20 20"><title>all-out2</title><path d="M13.508 3.467l3.333 3.333v-3.333zM16.842 13.467l-3.333 3.333h3.333zM6.842 16.8l-3.333-3.333v3.333zM3.508 6.8l3.333-3.333h-3.333zM14.3 6.008c-2.275-2.275-5.975-2.275-8.25 0s-2.275 5.975 0 8.25 5.975 2.275 8.25 0 2.275-5.967 0-8.25zM13.383 13.342c-1.775 1.775-4.642 1.775-6.417 0s-1.775-4.642 0-6.417 4.642-1.775 6.417 0 1.775 4.642 0 6.417z"></path></symbol><symbol id="icon-content-paste2" viewBox="0 0 20 20"><title>content-paste2</title><path d="M15.833 1.667h-3.483c-0.35-0.967-1.267-1.667-2.35-1.667s-2 0.7-2.35 1.667h-3.483c-0.917 0-1.667 0.75-1.667 1.667v13.333c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-13.333c0-0.917-0.75-1.667-1.667-1.667zM10 1.667c0.458 0 0.833 0.375 0.833 0.833s-0.375 0.833-0.833 0.833-0.833-0.375-0.833-0.833 0.375-0.833 0.833-0.833zM15.833 16.667h-11.667v-13.333h1.667v2.5h8.333v-2.5h1.667v13.333z"></path></symbol><symbol id="icon-local-shipping2" viewBox="0 0 20 20"><title>local-shipping2</title><path d="M16.667 6.667h-2.5v-3.333h-11.667c-0.917 0-1.667 0.75-1.667 1.667v9.167h1.667c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h1.667v-4.167l-2.5-3.333zM5 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM16.25 7.917l1.633 2.083h-3.717v-2.083h2.083zM15 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25z"></path></symbol><symbol id="icon-location-on2" viewBox="0 0 20 20"><title>location-on2</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-payment2" viewBox="0 0 20 20"><title>payment2</title><path d="M16.667 3.333h-13.333c-0.925 0-1.658 0.742-1.658 1.667l-0.008 10c0 0.925 0.742 1.667 1.667 1.667h13.333c0.925 0 1.667-0.742 1.667-1.667v-10c0-0.925-0.742-1.667-1.667-1.667zM16.667 15h-13.333v-5h13.333v5zM16.667 6.667h-13.333v-1.667h13.333v1.667z"></path></symbol><symbol id="icon-person-pin2" viewBox="0 0 20 20"><title>person-pin2</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 4.417c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zM15 13.333h-10v-0.75c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.75z"></path></symbol><symbol id="icon-phone-in-talk2" viewBox="0 0 20 20"><title>phone-in-talk2</title><path d="M16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 10h1.667c0-4.142-3.358-7.5-7.5-7.5v1.667c3.225 0 5.833 2.608 5.833 5.833zM12.5 10h1.667c0-2.3-1.867-4.167-4.167-4.167v1.667c1.383 0 2.5 1.117 2.5 2.5z"></path></symbol><symbol id="icon-place" viewBox="0 0 20 20"><title>place</title><path d="M10 1.667c-3.225 0-5.833 2.608-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.225-2.608-5.833-5.833-5.833zM10 9.583c-1.15 0-2.083-0.933-2.083-2.083s0.933-2.083 2.083-2.083 2.083 0.933 2.083 2.083-0.933 2.083-2.083 2.083z"></path></symbol><symbol id="icon-playlist-add-check2" viewBox="0 0 20 20"><title>playlist-add-check2</title><path d="M11.667 8.333h-10v1.667h10v-1.667zM11.667 5h-10v1.667h10v-1.667zM1.667 13.333h6.667v-1.667h-6.667v1.667zM17.917 9.583l1.25 1.25-5.825 5.833-3.758-3.75 1.25-1.25 2.508 2.5 4.575-4.583z"></path></symbol><symbol id="icon-spa2" viewBox="0 0 20 20"><title>spa2</title><path d="M7.125 10c-0.892-0.592-1.875-1.058-2.942-1.342 1.067 0.283 2.050 0.75 2.942 1.342zM15.817 8.658c-1.075 0.283-2.075 0.758-2.975 1.367 0.9-0.608 1.9-1.083 2.975-1.367z"></path><path d="M12.908 8.025c-0.15-2.325-1.092-4.592-2.858-6.358-1.783 1.783-2.767 4.050-2.958 6.358 1.067 0.567 2.050 1.3 2.908 2.192 0.858-0.883 1.842-1.617 2.908-2.192zM7.492 10.233c-0.117-0.083-0.25-0.158-0.375-0.242 0.125 0.092 0.258 0.158 0.375 0.242zM12.842 10.025c-0.108 0.075-0.225 0.133-0.333 0.217 0.108-0.083 0.225-0.142 0.333-0.217zM10 12.875c-1.792-2.733-4.85-4.542-8.333-4.542 0 4.433 2.8 8.183 6.692 9.575 0.525 0.192 1.075 0.333 1.642 0.425 0.567-0.1 1.108-0.242 1.642-0.425 3.892-1.392 6.692-5.142 6.692-9.575-3.483 0-6.542 1.808-8.333 4.542z"></path></symbol><symbol id="icon-star-border2" viewBox="0 0 20 20"><title>star-border2</title><path d="M18.333 7.7l-5.992-0.517-2.342-5.517-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942zM10 12.833l-3.133 1.892 0.833-3.567-2.767-2.4 3.65-0.317 1.417-3.358 1.425 3.367 3.65 0.317-2.767 2.4 0.833 3.567-3.142-1.9z"></path></symbol><symbol id="icon-star3" viewBox="0 0 20 20"><title>star3</title><path d="M10 12.556l4.122 3-1.578-4.844 4.122-2.933h-5.056l-1.611-5-1.611 5h-5.056l4.122 2.933-1.578 4.844z"></path></symbol><symbol id="icon-tram2" viewBox="0 0 20 20"><title>tram2</title><path d="M15.833 14.117v-7.033c0-2.325-2.175-2.833-5.008-2.908l0.633-1.258h2.708v-1.25h-8.333v1.25h3.958l-0.633 1.267c-2.608 0.075-4.992 0.592-4.992 2.9v7.033c0 1.208 0.992 2.217 2.158 2.475l-1.325 1.325v0.417h1.858l1.667-1.667h3.142l1.667 1.667h1.667v-0.417l-1.25-1.25h-0.067c1.408 0 2.15-1.142 2.15-2.55zM10 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM14.167 11.667h-8.333v-4.167h8.333v4.167z"></path></symbol><symbol id="icon-turned-in-not2" viewBox="0 0 20 20"><title>turned-in-not2</title><path d="M14.167 2.5h-8.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 13.333 5.833-2.5 5.833 2.5v-13.333c0-0.917-0.75-1.667-1.667-1.667zM14.167 15l-4.167-1.817-4.167 1.817v-10.833h8.333v10.833z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	new WOW().init();
}

//функция помощник: siblings
var getSiblings = function(elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for(; sibling; sibling = sibling.nextSibling) {
		if(sibling.nodeType !== 1 || sibling === elem) continue;
		siblings.push(sibling);
	}
	return siblings;
}

//active
function active(elem) {
	$(elem).on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
}

//active & siblings off
function activeSiblings(elem) {
	$(elem).on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
}

//active other
function activerOther(elem, target) {
	$(elem).on('click', function(){
		$(target).removeClass('menu__hide').toggleClass('active');
	});
}

//bodyOverflow
function bodyOverflow(elem) {
	var btn = $(elem);
	var body = $('body');
	btn.on('click', function(){
		body.toggleClass('overflow');
	});
}

//toggleClass on window scroll
function changeClassOnScroll(){
	$(window).scroll(function() {
    var elem = $('.parallax__container');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
    if (top > 828) {
      elem.addClass('parallax__container--off');
    } else {
      elem.removeClass('parallax__container--off');
    }
		if (screen.width <= 1440) {
			if (top > 626) {
	      elem.addClass('parallax__container--off');
	    } else {
	      elem.removeClass('parallax__container--off');
	    }
		}
		if (screen.width <= 1280) {
			if (top > 556) {
	      elem.addClass('parallax__container--off');
	    } else {
	      elem.removeClass('parallax__container--off');
	    }
		}
  });
}

//Universal Tabs
function tabs() {
	$(document).on('click', '[data-tabclass]', function() {
		var content = $(this).attr('data-tabclass');
		var number = $(this).attr('data-tabnumber');
		$('[data-tabclass="' + content + '"]').each(function() {
			if ($(this).attr('data-tabnumber') == number) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active flex animated').removeClass('hide').css('display', 'flex').siblings().hide().removeClass('active flex animated showFlex');
	});
};

//animate
function animate(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//animate + hide
function animateHide(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
			setTimeout(function(){e
				$(content).hide();
			}, hideTiming);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//owl-slider
function slider(animationIn, animationOut, elem, items, navContainer, navText) {
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.popular__slider';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg>', '<svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg>'];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				0: {
					items: 1
				},
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1025: {
					items: 5
				},
			}
		});
	}
}

//spincrement
function spincrement() {
	var elem = $('.spincrement');
	if(elem){
		$(".spincrement").spincrement();
		var show = true;
		var countbox = ".stats";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$(".spincrement").spincrement({
					thousandSeparator: ""
					, duration: 3000
				});
				show = false;
			}
		});
	}
}

//Маска для телефона
function phoneMask() {
	if($('*').is('.formTel')){
		$(".formTel").mask("+7(999)999-99-99", {
			placeholder: "+7(___)___-__-__"
		});
	}
}

//tabsNav
function tabsNav() {
	var containers = document.querySelectorAll('.choose__roomNav-wrap');
	containers.forEach(function(item, index, array){
		var prev = item.querySelector('.choose__roomNav-btn--prev');
		var next = item.querySelector('.choose__roomNav-btn--next');
		var navItems = item.querySelector('.choose__roomNav').childNodes;
		var navitemFirst = navItems[1];
		var navitemLast = navItems[7];

		function tabsPrev() {
			var navItemActive = item.querySelector('.choose__roomNav-item.active');
			var navItemPrev = navItemActive.previousElementSibling;

			navItemActive.classList.remove('active');
			if(navItemPrev){
				var itemDataClass = navItemPrev.getAttribute('data-tabclass');
				var itemDataNumber = navItemPrev.getAttribute('data-tabnumber');
				var tabContent = item.nextElementSibling.querySelectorAll('.choose__room-item');

				tabContent.forEach(function(item, index, array) {
					var itemContentNumber = item.getAttribute('data-tabnumber');
					item.style.display = 'none';

					if(itemContentNumber == itemDataNumber){
						item.style.display = 'block';
						item.classList.add('animated');
					}
				});

				navItemPrev.classList.add('active');
			}else{
				navitemFirst.classList.add('active');
			}
		}
		function tabsNext() {
			var navItemActive = item.querySelector('.choose__roomNav-item.active');
			var navItemNext = navItemActive.nextElementSibling;

			navItemActive.classList.remove('active');
			if(navItemNext){
				var itemDataClass = navItemNext.getAttribute('data-tabclass');
				var itemDataNumber = navItemNext.getAttribute('data-tabnumber');

				var tabContent = item.nextElementSibling.querySelectorAll('.choose__room-item');
				tabContent.forEach(function(item, index, array) {
					var itemContentNumber = item.getAttribute('data-tabnumber');
					item.style.display = 'none';

					if(itemContentNumber == itemDataNumber){
						item.style.display = 'block';
						item.classList.add('animated');
					}
				});

				navItemNext.classList.add('active');
			}else{
				navitemLast.classList.add('active');
			}
		}

		prev.addEventListener('click', tabsPrev);
		next.addEventListener('click', tabsNext);
	});
}

//resizeFix
function resizeFix(elem) {
	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		if(windowWidth > 1024){
			$(elem).show().removeClass('animated');
		}else {
			$(elem).addClass('animated');
		}
	});
}

//productToggle
function productToggle(elem) {
	$(elem).on('click', function(){
		var target = $(this).closest('.product__buy').find('.product__calc');

		$(this).addClass('animated fadeOut');
		$(target).show().addClass('animated slideInUp');
	});
}

//menuHover
function menuHover() {
	var menuDrop = $('.menu__drop');
	var menuItem = $('.menu__item');
	var menuLink = $('.menu__link');

	$('[data-item]').mouseenter(function(){
		var itemData = $(this).data('item');
		menuLink.each(function(){
			var linkData = $(this).data('item');

			if(linkData == itemData){
				$(this).addClass('active');
			}
		});
	});

	$('[data-item]').mouseleave(function(){
		var itemData = $(this).data('item');
		menuLink.each(function(){
			var linkData = $(this).data('item');

			if(linkData == itemData){
				$(this).removeClass('active');
			}
		});
	});
}

//catalogCalc
function catalogCalc(){
	var select = $('.catalog__select');
	var btn = $('.catalog__btn');
	var dec = $('.catalog__btn--dec');
	var inc = $('.catalog__btn--inc');
	var output = $('.catalog__price-number');
	var valueBox = $('.catalog__output');

	$(select).on('change', function(){
		var options = $(this).find('option');
		var value = $(this).val();
		var output = $(this).closest('.catalog__item').find($('.catalog__price-number'));
		var valueBox = $(this).closest('.catalog__item').find($('.catalog__output'));

		options.each(function(){
			var optionValue = $(this).val();
			if(value == optionValue){
				var price = $(this).data('price');
				$(output).html(price).attr('data-price', price);
				$(valueBox).html(1);
			}
		});
	});

	$(btn).on('click', function(){
		var output = $(this).closest('.catalog__item').find('.catalog__price-number');
		var value = $(this).closest('.catalog__item').find('.catalog__output');
		var valueHtml = $(value).html();

		if($(this).hasClass('dec')){
			--valueHtml
		}else if($(this).hasClass('inc')){
			++valueHtml
		}
		if(valueHtml <= 1){
			valueHtml = 1;
		}
		var summ = valueHtml * parseInt(output.attr('data-price'));

		$(value).html(valueHtml);
		$(output).html(summ);
	});
}

//checkSort
function checkSort(){
	var input = $('.sort__input');

	$(input).on('change', function(){
		$(this).closest('.sort__inpbox').siblings().find('.sort__input').attr('checked', false);
	});
}

window.onload = function() {
	//scrollEvents
	scrollEffects();
	changeClassOnScroll();

	//other
	bodyOverflow('.hamburger');
	phoneMask();
	catalogCalc();
	checkSort();

	//tabs
	tabs();

	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//activeSiblings

	//activeOther


	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animate('.hamburger__wrap', '.nav', 'slideInLeft', 'slideOutLeft');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
};
