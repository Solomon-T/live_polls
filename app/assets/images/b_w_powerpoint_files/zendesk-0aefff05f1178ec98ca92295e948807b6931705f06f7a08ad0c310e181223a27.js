(function(){var chatTags;chatTags=function(){var ref;return(null!=(ref=$("[data-zendesk-chat-tags]").data("zendesk-chat-tags"))?ref.split(","):void 0)||[]},$(window).on("load",function(){var enableZendeskButton,fetchProfilePromise,queue;return window.zEmbed||(queue=[],window.zEmbed=function(){queue.push(arguments)},window.zE=window.zE||window.zEmbed,document.zendeskHost="polleverywhere.zendesk.com",document.zEQueue=queue),window.zESettings={webWidget:{loaded:!1,zIndex:999,contactForm:{attachments:!0},helpCenter:{suppress:!0},chat:{suppress:!0,tags:chatTags()}}},zE(function(){var e;try{return zE.hide()}catch(error){if(e=error,window.console&&window.console.log)return console.log("zE.hide error",e)}}),fetchProfilePromise=function(){return $.ajax({url:"/api/profile"}).then(function(profile){return zE(function(){return zE.identify({name:profile.user.name,email:profile.user.email})})})}(),enableZendeskButton=function(){return $("[js-show-zendesk]").click(function(){return fetchProfilePromise.then(function(){return zE(function(){return zE.activate({hideOnClose:!0})}),enableZendeskButton()})})},setTimeout(function(){return $.ajax({url:"https://assets.zendesk.com/embeddable_framework/main.js",dataType:"script",cache:!0,success:function(){return $("[js-show-zendesk]").removeClass("hidden"),enableZendeskButton()}})},2e3)})}).call(this);