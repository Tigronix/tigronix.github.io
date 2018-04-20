"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-ac-unit" viewBox="0 0 20 20"><title>ac-unit</title><path d="M18.333 9.167h-3.475l2.7-2.7-1.175-1.183-3.883 3.883h-1.667v-1.667l3.883-3.883-1.183-1.175-2.7 2.7v-3.475h-1.667v3.475l-2.7-2.7-1.183 1.175 3.883 3.883v1.667h-1.667l-3.883-3.883-1.175 1.183 2.7 2.7h-3.475v1.667h3.475l-2.7 2.7 1.175 1.183 3.883-3.883h1.667v1.667l-3.883 3.883 1.183 1.175 2.7-2.7v3.475h1.667v-3.475l2.7 2.7 1.183-1.175-3.883-3.883v-1.667h1.667l3.883 3.883 1.175-1.183-2.7-2.7h3.475z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 20 20"><title>access-time</title><path d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.342-3.733 8.342-8.333s-3.733-8.333-8.342-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path><path d="M10.417 5.833h-1.25v5l4.375 2.625 0.625-1.025-3.75-2.225z"></path></symbol><symbol id="icon-account-balance" viewBox="0 0 20 20"><title>account-balance</title><path d="M3.333 8.333v5.833h2.5v-5.833h-2.5zM8.333 8.333v5.833h2.5v-5.833h-2.5zM1.667 18.333h15.833v-2.5h-15.833v2.5zM13.333 8.333v5.833h2.5v-5.833h-2.5zM9.583 0.833l-7.917 4.167v1.667h15.833v-1.667l-7.917-4.167z"></path></symbol><symbol id="icon-add-location" viewBox="0 0 20 20"><title>add-location</title><path d="M10 1.667c-3.217 0-5.833 2.617-5.833 5.833 0 4.375 5.833 10.833 5.833 10.833s5.833-6.458 5.833-10.833c0-3.217-2.617-5.833-5.833-5.833zM13.333 8.333h-2.5v2.5h-1.667v-2.5h-2.5v-1.667h2.5v-2.5h1.667v2.5h2.5v1.667z"></path></symbol><symbol id="icon-album" viewBox="0 0 20 20"><title>album</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 13.75c-2.075 0-3.75-1.675-3.75-3.75s1.675-3.75 3.75-3.75 3.75 1.675 3.75 3.75-1.675 3.75-3.75 3.75zM10 9.167c-0.458 0-0.833 0.375-0.833 0.833s0.375 0.833 0.833 0.833 0.833-0.375 0.833-0.833-0.375-0.833-0.833-0.833z"></path></symbol><symbol id="icon-arrow-back" viewBox="0 0 20 20"><title>arrow-back</title><path d="M16.667 9.167h-10.142l4.658-4.658-1.183-1.175-6.667 6.667 6.667 6.667 1.175-1.175-4.65-4.658h10.142v-1.667z"></path></symbol><symbol id="icon-arrow-drop-down" viewBox="0 0 20 20"><title>arrow-drop-down</title><path d="M5.833 8.333l4.167 4.167 4.167-4.167z"></path></symbol><symbol id="icon-arrow-forward" viewBox="0 0 20 20"><title>arrow-forward</title><path d="M10 3.333l-1.175 1.175 4.65 4.658h-10.142v1.667h10.142l-4.65 4.658 1.175 1.175 6.667-6.667z"></path></symbol><symbol id="icon-aspect-ratio" viewBox="0 0 20 20"><title>aspect-ratio</title><path d="M15.833 10h-1.667v2.5h-2.5v1.667h4.167v-4.167zM5.833 7.5h2.5v-1.667h-4.167v4.167h1.667v-2.5zM17.5 2.5h-15c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h15c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM17.5 15.842h-15v-11.683h15v11.683z"></path></symbol><symbol id="icon-av-timer" viewBox="0 0 20 20"><title>av-timer</title><path d="M9.167 14.167c0 0.458 0.375 0.833 0.833 0.833s0.833-0.375 0.833-0.833-0.375-0.833-0.833-0.833-0.833 0.375-0.833 0.833zM9.167 2.5v3.333h1.667v-1.6c2.825 0.408 5 2.825 5 5.767 0 3.225-2.608 5.833-5.833 5.833s-5.833-2.608-5.833-5.833c0-1.4 0.492-2.683 1.317-3.683l4.517 4.517 1.175-1.175-5.667-5.667v0.017c-1.825 1.367-3.008 3.533-3.008 5.992 0 4.142 3.35 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-0.833zM15 10c0-0.458-0.375-0.833-0.833-0.833s-0.833 0.375-0.833 0.833 0.375 0.833 0.833 0.833 0.833-0.375 0.833-0.833zM5 10c0 0.458 0.375 0.833 0.833 0.833s0.833-0.375 0.833-0.833-0.375-0.833-0.833-0.833-0.833 0.375-0.833 0.833z"></path></symbol><symbol id="icon-battery-charging-full" viewBox="0 0 20 20"><title>battery-charging-full</title><path d="M13.058 3.333h-1.392v-1.667h-3.333v1.667h-1.392c-0.608 0-1.108 0.5-1.108 1.108v12.775c0 0.617 0.5 1.117 1.108 1.117h6.108c0.617 0 1.117-0.5 1.117-1.108v-12.783c0-0.608-0.5-1.108-1.108-1.108zM9.167 16.667v-4.583h-1.667l3.333-6.25v4.583h1.667l-3.333 6.25z"></path></symbol><symbol id="icon-brightness-6" viewBox="0 0 20 20"><title>brightness-6</title><path d="M16.667 12.758l2.758-2.758-2.758-2.758v-3.908h-3.908l-2.758-2.758-2.758 2.758h-3.908v3.908l-2.758 2.758 2.758 2.758v3.908h3.908l2.758 2.758 2.758-2.758h3.908v-3.908zM10 15v-10c2.758 0 5 2.242 5 5s-2.242 5-5 5z"></path></symbol><symbol id="icon-build" viewBox="0 0 20 20"><title>build</title><path d="M18.917 15.833l-7.583-7.583c0.75-1.917 0.333-4.167-1.25-5.75-1.667-1.667-4.167-2-6.167-1.083l3.583 3.583-2.5 2.5-3.667-3.583c-1 2-0.583 4.5 1.083 6.167 1.583 1.583 3.833 2 5.75 1.25l7.583 7.583c0.333 0.333 0.833 0.333 1.167 0l1.917-1.917c0.417-0.333 0.417-0.917 0.083-1.167z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 20 20"><title>check-circle</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM8.333 14.167l-4.167-4.167 1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.183-7.5 7.5z"></path></symbol><symbol id="icon-computer" viewBox="0 0 20 20"><title>computer</title><path d="M16.667 15c0.917 0 1.658-0.75 1.658-1.667l0.008-8.333c0-0.917-0.75-1.667-1.667-1.667h-13.333c-0.917 0-1.667 0.75-1.667 1.667v8.333c0 0.917 0.75 1.667 1.667 1.667h-3.333v1.667h20v-1.667h-3.333zM3.333 5h13.333v8.333h-13.333v-8.333z"></path></symbol><symbol id="icon-desktop-mac" viewBox="0 0 20 20"><title>desktop-mac</title><path d="M17.5 1.667h-15c-0.917 0-1.667 0.75-1.667 1.667v10c0 0.917 0.75 1.667 1.667 1.667h5.833l-1.667 2.5v0.833h6.667v-0.833l-1.667-2.5h5.833c0.917 0 1.667-0.75 1.667-1.667v-10c0-0.917-0.75-1.667-1.667-1.667zM17.5 11.667h-15v-8.333h15v8.333z"></path></symbol><symbol id="icon-devices" viewBox="0 0 20 20"><title>devices</title><path d="M3.333 5h15v-1.667h-15c-0.917 0-1.667 0.75-1.667 1.667v9.167h-1.667v2.5h11.667v-2.5h-8.333v-9.167zM19.167 6.667h-5c-0.458 0-0.833 0.375-0.833 0.833v8.333c0 0.458 0.375 0.833 0.833 0.833h5c0.458 0 0.833-0.375 0.833-0.833v-8.333c0-0.458-0.375-0.833-0.833-0.833zM18.333 14.167h-3.333v-5.833h3.333v5.833z"></path></symbol><symbol id="icon-directions-walk" viewBox="0 0 20 20"><title>directions-walk</title><path d="M11.25 4.583c0.917 0 1.667-0.75 1.667-1.667s-0.75-1.667-1.667-1.667-1.667 0.75-1.667 1.667 0.75 1.667 1.667 1.667zM8.167 7.417l-2.333 11.75h1.75l1.5-6.667 1.75 1.667v5h1.667v-6.25l-1.75-1.667 0.5-2.5c1.083 1.25 2.75 2.083 4.583 2.083v-1.667c-1.583 0-2.917-0.833-3.583-2l-0.833-1.333c-0.333-0.5-0.833-0.833-1.417-0.833-0.25 0-0.417 0.083-0.667 0.083l-4.333 1.833v3.917h1.667v-2.833l1.5-0.583z"></path></symbol><symbol id="icon-dock" viewBox="0 0 20 20"><title>dock</title><path d="M6.667 19.167h6.667v-1.667h-6.667v1.667zM13.333 0.842l-6.667-0.008c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h6.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.658-1.667-1.658zM13.333 12.5h-6.667v-8.333h6.667v8.333z"></path></symbol><symbol id="icon-expand-more" viewBox="0 0 20 20"><title>expand-more</title><path d="M13.825 7.158l-3.825 3.817-3.825-3.817-1.175 1.175 5 5 5-5z"></path></symbol><symbol id="icon-filter-vintage" viewBox="0 0 20 20"><title>filter-vintage</title><path d="M15.583 10.333c-0.233-0.133-0.475-0.242-0.717-0.333 0.242-0.092 0.483-0.2 0.717-0.333 1.6-0.925 2.492-2.6 2.5-4.325-1.492-0.858-3.392-0.925-5 0-0.233 0.133-0.45 0.292-0.65 0.45 0.042-0.258 0.067-0.525 0.067-0.792 0-1.85-1.008-3.458-2.5-4.325-1.492 0.867-2.5 2.475-2.5 4.325 0 0.267 0.025 0.533 0.067 0.792-0.2-0.167-0.417-0.325-0.65-0.458-1.6-0.925-3.5-0.858-5 0 0 1.725 0.892 3.4 2.5 4.325 0.233 0.133 0.475 0.242 0.717 0.333-0.242 0.092-0.483 0.2-0.717 0.333-1.6 0.925-2.492 2.6-2.5 4.325 1.492 0.858 3.392 0.925 5 0 0.233-0.133 0.45-0.292 0.65-0.45-0.042 0.267-0.067 0.533-0.067 0.8 0 1.85 1.008 3.458 2.5 4.325 1.492-0.867 2.5-2.475 2.5-4.325 0-0.267-0.025-0.533-0.067-0.792 0.2 0.167 0.417 0.317 0.65 0.45 1.6 0.925 3.5 0.858 5 0-0.008-1.725-0.9-3.4-2.5-4.325zM10 13.333c-1.842 0-3.333-1.492-3.333-3.333s1.492-3.333 3.333-3.333 3.333 1.492 3.333 3.333-1.492 3.333-3.333 3.333z"></path></symbol><symbol id="icon-format-color-fill" viewBox="0 0 20 20"><title>format-color-fill</title><path d="M13.8 7.45l-7.45-7.45-1.175 1.175 1.983 1.983-4.292 4.292c-0.492 0.492-0.492 1.283 0 1.767l4.583 4.583c0.242 0.242 0.567 0.367 0.883 0.367s0.642-0.125 0.883-0.367l4.583-4.583c0.492-0.483 0.492-1.275 0-1.767zM4.342 8.333l3.992-3.992 3.992 3.992h-7.983zM15.833 9.583s-1.667 1.808-1.667 2.917c0 0.917 0.75 1.667 1.667 1.667s1.667-0.75 1.667-1.667c0-1.108-1.667-2.917-1.667-2.917z"></path><path d="M0 16.667h20v3.333h-20z"></path></symbol><symbol id="icon-important-device" viewBox="0 0 20 20"><title>important-device</title><path d="M19.167 9.175l-4.167-0.008c-0.458 0-0.833 0.375-0.833 0.833v7.5c0 0.458 0.375 0.833 0.833 0.833h4.167c0.458 0 0.833-0.375 0.833-0.833v-7.5c0-0.458-0.375-0.825-0.833-0.825zM19.167 16.667h-4.167v-5.833h4.167v5.833zM16.667 1.667h-15c-0.925 0-1.667 0.742-1.667 1.667v10c0 0.917 0.742 1.667 1.667 1.667h5.833v1.667h-1.667v1.667h6.667v-1.667h-1.667v-1.667h1.667v-1.667h-10.833v-10h15v4.167h1.667v-4.167c0-0.925-0.75-1.667-1.667-1.667zM9.975 7.5l-0.808-2.5-0.808 2.5h-2.525l2.058 1.467-0.783 2.425 2.058-1.5 2.058 1.5-0.783-2.425 2.058-1.467h-2.525z"></path></symbol><symbol id="icon-inbox" viewBox="0 0 20 20"><title>inbox</title><path d="M15.833 2.5h-11.675c-0.925 0-1.65 0.742-1.65 1.667l-0.008 11.667c0 0.917 0.733 1.667 1.658 1.667h11.675c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.925-0.75-1.667-1.667-1.667zM15.833 12.5h-3.333c0 1.383-1.125 2.5-2.5 2.5s-2.5-1.117-2.5-2.5h-3.342v-8.333h11.675v8.333z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 20 20"><title>keyboard-arrow-left</title><path d="M12.842 13.408l-3.817-3.825 3.817-3.825-1.175-1.175-5 5 5 5z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 20 20"><title>keyboard-arrow-right</title><path d="M7.158 13.617l3.817-3.825-3.817-3.825 1.175-1.175 5 5-5 5z"></path></symbol><symbol id="icon-keyboard-hide" viewBox="0 0 20 20"><title>keyboard-hide</title><path d="M16.667 2.5h-13.333c-0.917 0-1.658 0.75-1.658 1.667l-0.008 8.333c0 0.917 0.75 1.667 1.667 1.667h13.333c0.917 0 1.667-0.75 1.667-1.667v-8.333c0-0.917-0.75-1.667-1.667-1.667zM9.167 5h1.667v1.667h-1.667v-1.667zM9.167 7.5h1.667v1.667h-1.667v-1.667zM6.667 5h1.667v1.667h-1.667v-1.667zM6.667 7.5h1.667v1.667h-1.667v-1.667zM5.833 9.167h-1.667v-1.667h1.667v1.667zM5.833 6.667h-1.667v-1.667h1.667v1.667zM13.333 12.5h-6.667v-1.667h6.667v1.667zM13.333 9.167h-1.667v-1.667h1.667v1.667zM13.333 6.667h-1.667v-1.667h1.667v1.667zM15.833 9.167h-1.667v-1.667h1.667v1.667zM15.833 6.667h-1.667v-1.667h1.667v1.667zM10 19.167l3.333-3.333h-6.667l3.333 3.333z"></path></symbol><symbol id="icon-layers" viewBox="0 0 20 20"><title>layers</title><path d="M9.992 15.45l-6.142-4.775-1.35 1.050 7.5 5.833 7.5-5.833-1.358-1.058-6.15 4.783zM10 13.333l7.5-5.833-7.5-5.833-7.5 5.833 1.358 1.058 6.142 4.775z"></path></symbol><symbol id="icon-local-phone" viewBox="0 0 20 20"><title>local-phone</title><path d="M5.517 8.992c1.2 2.358 3.133 4.283 5.492 5.492l1.833-1.833c0.225-0.225 0.558-0.3 0.85-0.2 0.933 0.308 1.942 0.475 2.975 0.475 0.458 0 0.833 0.375 0.833 0.833v2.908c0 0.458-0.375 0.833-0.833 0.833-7.825 0-14.167-6.342-14.167-14.167 0-0.458 0.375-0.833 0.833-0.833h2.917c0.458 0 0.833 0.375 0.833 0.833 0 1.042 0.167 2.042 0.475 2.975 0.092 0.292 0.025 0.617-0.208 0.85l-1.833 1.833z"></path></symbol><symbol id="icon-local-shipping" viewBox="0 0 20 20"><title>local-shipping</title><path d="M16.667 6.667h-2.5v-3.333h-11.667c-0.917 0-1.667 0.75-1.667 1.667v9.167h1.667c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5h1.667v-4.167l-2.5-3.333zM5 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25zM16.25 7.917l1.633 2.083h-3.717v-2.083h2.083zM15 15.417c-0.692 0-1.25-0.558-1.25-1.25s0.558-1.25 1.25-1.25 1.25 0.558 1.25 1.25-0.558 1.25-1.25 1.25z"></path></symbol><symbol id="icon-memory" viewBox="0 0 20 20"><title>memory</title><path d="M12.5 7.5h-5v5h5v-5zM10.833 10.833h-1.667v-1.667h1.667v1.667zM17.5 9.167v-1.667h-1.667v-1.667c0-0.917-0.75-1.667-1.667-1.667h-1.667v-1.667h-1.667v1.667h-1.667v-1.667h-1.667v1.667h-1.667c-0.917 0-1.667 0.75-1.667 1.667v1.667h-1.667v1.667h1.667v1.667h-1.667v1.667h1.667v1.667c0 0.917 0.75 1.667 1.667 1.667h1.667v1.667h1.667v-1.667h1.667v1.667h1.667v-1.667h1.667c0.917 0 1.667-0.75 1.667-1.667v-1.667h1.667v-1.667h-1.667v-1.667h1.667zM14.167 14.167h-8.333v-8.333h8.333v8.333z"></path></symbol><symbol id="icon-perm-device-information" viewBox="0 0 20 20"><title>perm-device-information</title><path d="M10.833 5.833h-1.667v1.667h1.667v-1.667zM10.833 9.167h-1.667v5h1.667v-5zM14.167 0.842l-8.333-0.008c-0.917 0-1.667 0.75-1.667 1.667v15c0 0.917 0.75 1.667 1.667 1.667h8.333c0.917 0 1.667-0.75 1.667-1.667v-15c0-0.917-0.75-1.658-1.667-1.658zM14.167 15.833h-8.333v-11.667h8.333v11.667z"></path></symbol><symbol id="icon-person-pin" viewBox="0 0 20 20"><title>person-pin</title><path d="M15.833 1.667h-11.667c-0.925 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.742 1.667 1.667 1.667h3.333l2.5 2.5 2.5-2.5h3.333c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM10 4.417c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zM15 13.333h-10v-0.75c0-1.667 3.333-2.583 5-2.583s5 0.917 5 2.583v0.75z"></path></symbol><symbol id="icon-phone-android" viewBox="0 0 20 20"><title>phone-android</title><path d="M13.333 0.833h-6.667c-1.383 0-2.5 1.117-2.5 2.5v13.333c0 1.383 1.117 2.5 2.5 2.5h6.667c1.383 0 2.5-1.117 2.5-2.5v-13.333c0-1.383-1.117-2.5-2.5-2.5zM11.667 17.5h-3.333v-0.833h3.333v0.833zM14.375 15h-8.75v-11.667h8.75v11.667z"></path></symbol><symbol id="icon-phone-forwarded" viewBox="0 0 20 20"><title>phone-forwarded</title><path d="M15 9.167l4.167-4.167-4.167-4.167v2.5h-3.333v3.333h3.333v2.5zM16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833z"></path></symbol><symbol id="icon-phone-in-talk" viewBox="0 0 20 20"><title>phone-in-talk</title><path d="M16.667 12.917c-1.042 0-2.042-0.167-2.975-0.475-0.292-0.092-0.617-0.025-0.85 0.2l-1.833 1.833c-2.358-1.2-4.292-3.125-5.492-5.492l1.833-1.842c0.233-0.217 0.3-0.542 0.208-0.833-0.308-0.933-0.475-1.933-0.475-2.975 0-0.458-0.375-0.833-0.833-0.833h-2.917c-0.458 0-0.833 0.375-0.833 0.833 0 7.825 6.342 14.167 14.167 14.167 0.458 0 0.833-0.375 0.833-0.833v-2.917c0-0.458-0.375-0.833-0.833-0.833zM15.833 10h1.667c0-4.142-3.358-7.5-7.5-7.5v1.667c3.225 0 5.833 2.608 5.833 5.833zM12.5 10h1.667c0-2.3-1.867-4.167-4.167-4.167v1.667c1.383 0 2.5 1.117 2.5 2.5z"></path></symbol><symbol id="icon-photo-filter" viewBox="0 0 20 20"><title>photo-filter</title><path d="M15.85 8.333v7.5h-11.683v-11.667h7.5v-1.667h-7.483c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-7.5h-1.667zM14.167 8.333l0.783-1.717 1.717-0.783-1.717-0.783-0.783-1.717-0.783 1.717-1.717 0.783 1.717 0.783zM11.042 8.958l-1.042-2.292-1.042 2.292-2.292 1.042 2.292 1.042 1.042 2.292 1.042-2.292 2.292-1.042z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 20 20"><title>portrait</title><path d="M10 10.208c1.033 0 1.875-0.842 1.875-1.875s-0.842-1.875-1.875-1.875-1.875 0.842-1.875 1.875 0.842 1.875 1.875 1.875zM13.75 13.542c0-1.25-2.5-1.875-3.75-1.875s-3.75 0.625-3.75 1.875v0.625h7.5v-0.625zM15.833 2.5h-11.667c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h11.667c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM15.833 15.833h-11.667v-11.667h11.667v11.667z"></path></symbol><symbol id="icon-power-settings-new" viewBox="0 0 20 20"><title>power-settings-new</title><path d="M10.833 2.5h-1.667v8.333h1.667v-8.333zM14.858 4.308l-1.183 1.183c1.317 1.058 2.158 2.683 2.158 4.508 0 3.225-2.608 5.833-5.833 5.833s-5.833-2.608-5.833-5.833c0-1.825 0.842-3.45 2.15-4.517l-1.175-1.175c-1.617 1.375-2.642 3.408-2.642 5.692 0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-2.283-1.025-4.317-2.642-5.692z"></path></symbol><symbol id="icon-queue-play-next" viewBox="0 0 20 20"><title>queue-play-next</title><path d="M17.5 2.5h-15c-0.925 0-1.667 0.742-1.667 1.667v10c0 0.917 0.742 1.667 1.667 1.667h4.167v1.667h6.667v-1.667h1.667v-1.667h-12.5v-10h15v6.667h1.667v-6.667c0-0.925-0.75-1.667-1.667-1.667zM10.833 8.333v-2.5h-1.667v2.5h-2.5v1.667h2.5v2.5h1.667v-2.5h2.5v-1.667h-2.5zM20 15l-3.75 3.75-1.25-1.25 2.5-2.5-2.5-2.5 1.25-1.25 3.75 3.75z"></path></symbol><symbol id="icon-radio-button-checked" viewBox="0 0 20 20"><title>radio-button-checked</title><path d="M10 5.833c-2.3 0-4.167 1.867-4.167 4.167s1.867 4.167 4.167 4.167 4.167-1.867 4.167-4.167-1.867-4.167-4.167-4.167zM10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-radio-button-unchecked" viewBox="0 0 20 20"><title>radio-button-unchecked</title><path d="M10 1.667c-4.6 0-8.333 3.733-8.333 8.333s3.733 8.333 8.333 8.333 8.333-3.733 8.333-8.333-3.733-8.333-8.333-8.333zM10 16.667c-3.683 0-6.667-2.983-6.667-6.667s2.983-6.667 6.667-6.667 6.667 2.983 6.667 6.667-2.983 6.667-6.667 6.667z"></path></symbol><symbol id="icon-report-problem" viewBox="0 0 20 20"><title>report-problem</title><path d="M0.833 17.5h18.333l-9.167-15.833-9.167 15.833zM10.833 15h-1.667v-1.667h1.667v1.667zM10.833 11.667h-1.667v-3.333h1.667v3.333z"></path></symbol><symbol id="icon-search" viewBox="0 0 20 20"><title>search</title><path d="M12.917 11.667h-0.658l-0.233-0.225c0.817-0.95 1.308-2.183 1.308-3.525 0-2.992-2.425-5.417-5.417-5.417s-5.417 2.425-5.417 5.417 2.425 5.417 5.417 5.417c1.342 0 2.575-0.492 3.525-1.308l0.225 0.233v0.658l4.167 4.158 1.242-1.242-4.158-4.167zM7.917 11.667c-2.075 0-3.75-1.675-3.75-3.75s1.675-3.75 3.75-3.75 3.75 1.675 3.75 3.75-1.675 3.75-3.75 3.75z"></path></symbol><symbol id="icon-security" viewBox="0 0 20 20"><title>security</title><path d="M10 0.833l-7.5 3.333v5c0 4.625 3.2 8.95 7.5 10 4.3-1.050 7.5-5.375 7.5-10v-5l-7.5-3.333zM10 9.992h5.833c-0.442 3.433-2.733 6.492-5.833 7.45v-7.442h-5.833v-4.75l5.833-2.592v7.333z"></path></symbol><symbol id="icon-select-all" viewBox="0 0 20 20"><title>select-all</title><path d="M2.5 4.167h1.667v-1.667c-0.917 0-1.667 0.75-1.667 1.667zM2.5 10.833h1.667v-1.667h-1.667v1.667zM5.833 17.5h1.667v-1.667h-1.667v1.667zM2.5 7.5h1.667v-1.667h-1.667v1.667zM10.833 2.5h-1.667v1.667h1.667v-1.667zM15.833 2.5v1.667h1.667c0-0.917-0.75-1.667-1.667-1.667zM4.167 17.5v-1.667h-1.667c0 0.917 0.75 1.667 1.667 1.667zM2.5 14.167h1.667v-1.667h-1.667v1.667zM7.5 2.5h-1.667v1.667h1.667v-1.667zM9.167 17.5h1.667v-1.667h-1.667v1.667zM15.833 10.833h1.667v-1.667h-1.667v1.667zM15.833 17.5c0.917 0 1.667-0.75 1.667-1.667h-1.667v1.667zM15.833 7.5h1.667v-1.667h-1.667v1.667zM15.833 14.167h1.667v-1.667h-1.667v1.667zM12.5 17.5h1.667v-1.667h-1.667v1.667zM12.5 4.167h1.667v-1.667h-1.667v1.667zM5.833 14.167h8.333v-8.333h-8.333v8.333zM7.5 7.5h5v5h-5v-5z"></path></symbol><symbol id="icon-settings-brightness" viewBox="0 0 20 20"><title>settings-brightness</title><path d="M17.5 2.5h-15c-0.917 0-1.667 0.75-1.667 1.667v11.667c0 0.917 0.75 1.667 1.667 1.667h15c0.917 0 1.667-0.75 1.667-1.667v-11.667c0-0.917-0.75-1.667-1.667-1.667zM17.5 15.842h-15v-11.683h15v11.683zM6.667 13.333h2.083l1.25 1.25 1.25-1.25h2.083v-2.083l1.25-1.25-1.25-1.25v-2.083h-2.083l-1.25-1.25-1.25 1.25h-2.083v2.083l-1.25 1.25 1.25 1.25v2.083zM10 7.5c1.383 0 2.5 1.117 2.5 2.5s-1.117 2.5-2.5 2.5v-5z"></path></symbol><symbol id="icon-settings-input-hdmi" viewBox="0 0 20 20"><title>settings-input-hdmi</title><path d="M15 5.833v-2.5c0-0.917-0.75-1.667-1.667-1.667h-6.667c-0.917 0-1.667 0.75-1.667 1.667v2.5h-0.833v5l2.5 5v2.5h6.667v-2.5l2.5-5v-5h-0.833zM6.667 3.333h6.667v2.5h-1.667v-1.667h-0.833v1.667h-1.667v-1.667h-0.833v1.667h-1.667v-2.5z"></path></symbol><symbol id="icon-settings" viewBox="0 0 20 20"><title>settings</title><path d="M16.192 10.817c0.033-0.267 0.058-0.533 0.058-0.817s-0.025-0.55-0.058-0.817l1.758-1.375c0.158-0.125 0.2-0.35 0.1-0.533l-1.667-2.883c-0.1-0.183-0.325-0.25-0.508-0.183l-2.075 0.833c-0.433-0.333-0.9-0.608-1.408-0.817l-0.317-2.208c-0.025-0.2-0.2-0.35-0.408-0.35h-3.333c-0.208 0-0.383 0.15-0.408 0.35l-0.317 2.208c-0.508 0.208-0.975 0.492-1.408 0.817l-2.075-0.833c-0.192-0.075-0.408 0-0.508 0.183l-1.667 2.883c-0.108 0.183-0.058 0.408 0.1 0.533l1.758 1.375c-0.033 0.267-0.058 0.542-0.058 0.817s0.025 0.55 0.058 0.817l-1.758 1.375c-0.158 0.125-0.2 0.35-0.1 0.533l1.667 2.883c0.1 0.183 0.325 0.25 0.508 0.183l2.075-0.833c0.433 0.333 0.9 0.608 1.408 0.817l0.317 2.208c0.025 0.2 0.2 0.35 0.408 0.35h3.333c0.208 0 0.383-0.15 0.408-0.35l0.317-2.208c0.508-0.208 0.975-0.492 1.408-0.817l2.075 0.833c0.192 0.075 0.408 0 0.508-0.183l1.667-2.883c0.1-0.183 0.058-0.408-0.1-0.533l-1.758-1.375zM10 12.917c-1.608 0-2.917-1.308-2.917-2.917s1.308-2.917 2.917-2.917 2.917 1.308 2.917 2.917-1.308 2.917-2.917 2.917z"></path></symbol><symbol id="icon-star-half" viewBox="0 0 20 20"><title>star-half</title><path d="M18.333 7.7l-5.992-0.517-2.342-5.517-2.342 5.525-5.992 0.508 4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942zM10 12.833v-7.75l1.425 3.367 3.65 0.317-2.767 2.4 0.833 3.567-3.142-1.9z"></path></symbol><symbol id="icon-star" viewBox="0 0 20 20"><title>star</title><path d="M10 12.556l4.122 3-1.578-4.844 4.122-2.933h-5.056l-1.611-5-1.611 5h-5.056l4.122 2.933-1.578 4.844z"></path></symbol><symbol id="icon-sync" viewBox="0 0 20 20"><title>sync</title><path d="M10 3.333v-2.5l-3.333 3.333 3.333 3.333v-2.5c2.758 0 5 2.242 5 5 0 0.842-0.208 1.642-0.583 2.333l1.217 1.217c0.65-1.025 1.033-2.242 1.033-3.55 0-3.683-2.983-6.667-6.667-6.667zM10 15c-2.758 0-5-2.242-5-5 0-0.842 0.208-1.642 0.583-2.333l-1.217-1.217c-0.65 1.025-1.033 2.242-1.033 3.55 0 3.683 2.983 6.667 6.667 6.667v2.5l3.333-3.333-3.333-3.333v2.5z"></path></symbol><symbol id="icon-toys" viewBox="0 0 20 20"><title>toys</title><path d="M10 10c0-2.5 2.083-4.583 4.583-4.583s4.583 2.083 4.583 4.583h-9.167zM10 10c0 2.5-2.083 4.583-4.583 4.583s-4.583-2.083-4.583-4.583h9.167zM10 10c-2.5 0-4.583-2.083-4.583-4.583s2.083-4.583 4.583-4.583v9.167zM10 10c2.5 0 4.583 2.083 4.583 4.583s-2.083 4.583-4.583 4.583v-9.167z"></path></symbol></defs></svg>'
	})

function scrollEffects() {
	new WOW().init();
}

function loading() {
	$('.loading').fadeOut(1500);
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
	$(window).on('resize || load', function(){
		var btn = $(elem);
		var body = $('body');
		var windowWidth = $(this).width();

		btn.on('click', function(){
			if(windowWidth <= 1024){
				body.toggleClass('overflow');
			}
		});
	});
}

//toggleClass on window scroll
function changeClassOnScroll(){
	$(window).scroll(function() {
    var elem = $('.page-header');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
		var pageTop = $('.page-header__top');
		var pageBot = $('.page-header__bottom');
		var windowWidth = $(window).width();

    if (top > 50) {
			$(elem).addClass('scroll');
      $(pageTop).hide();
			$(pageBot).addClass('scroll');
    } else {
			$(elem).removeClass('scroll');
      $(pageTop).show();
			$(pageBot).removeClass('scroll');
    }

		if(windowWidth <= 1024){
			if (top > 50) {
				$(elem).removeClass('scroll');
	      $(pageTop).show();
				$(pageBot).removeClass('scroll');
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
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active animated').removeClass('hide').siblings().hide().removeClass('active animated');
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
		$(content).show().css('display', 'flex');
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
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.product__wrap';
	items = items || 1;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>', '<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'];
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
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
		});
	}
}

//brandSlider
function brandSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.brand__wrap';
	items = items || 11;
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
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 2
				},
				768: {
					items: 6
				},
				1025: {
					items: 9
				}
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

function accordion() {
	  var allPanels = $('.accordion .question__content').hide();
		var btn = $('.accBtn');
		var btnActive = $('.accBtn.active');

	  btn.click(function() {
	    $(this).parent().siblings().find('.accContent').slideUp();
	    $(this).parent().siblings().find('.accBtn').removeClass('active');
	    $(this).next().slideToggle();
			$(this).toggleClass('active');
	  });
}

function checkFix(elem) {
	$(elem).on('click', function(){
		$(this).closest('.checkFixBox').siblings().find(elem).prop('checked', false);
	});
}

//mainMargin
function mainMargin() {
	var heightHeader = $('.page-header').innerHeight();

	$('.main').css('margin-top', heightHeader);
}

window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other
	phoneMask();

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
	animateHide('.hamburger__wrap', '.menu', 'slideInLeft', 'slideOutLeft');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
	brandSlider();

	//loading
	loading();
};

//other
bodyOverflow('.hamburger');
