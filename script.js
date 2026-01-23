function hasConsentFor(e){return void 0!==window.CookieConsent&&window.CookieConsent.validConsent(e)}function withConsent(e,t){hasConsentFor(e)?t():console.log(`[WARNING] Skipping ${e} code - no user consent`)}window.zappyContactFormLoaded?console.log("⚠️ Zappy: Contact form handler already loaded, skipping duplicate injection"):window.zappyContactFormLoaded=!0,document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobileToggle"),t=document.getElementById("navMenu");if(e){e.addEventListener("click",function(){const e=this.querySelector(".hamburger-icon"),n=this.querySelector(".close-icon");this.classList.contains("active")?(e.style.display="block",n.style.display="none",this.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""):(e.style.display="none",n.style.display="block",this.classList.add("active"),t.classList.add("active"),document.body.style.overflow="hidden")});t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",function(){const n=e.querySelector(".hamburger-icon"),o=e.querySelector(".close-icon");n.style.display="block",o.style.display="none",e.classList.remove("active"),t.classList.remove("active"),document.body.style.overflow=""})})}const n=document.querySelector(".phone-header-btn");n&&n.addEventListener("click",function(){window.location.href="tel:+972542600266"});const o=document.getElementById("contactForm");o&&o.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("fullName").value,n=document.getElementById("email").value,i=document.getElementById("phone").value,a=document.getElementById("serviceType").value,s=document.getElementById("message").value,c=document.getElementById("consent").checked;if(!(t&&n&&i&&c))return void alert("נא למלא את כל השדות המסומנים בכוכבית");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?(window.zappyContactFormLoaded&&async function(){try{console.log("📧 Zappy: Sending contact form to backend...");const e={websiteId:"07ad4f37-f46a-4d47-947f-83058e7bd19f",name:t,email:n,subject:a||"Contact Form Submission",message:s,phone:i||null},o=await fetch("https://api.zappy5.com/api/email/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),c=await o.json();o.ok?console.log("✅ Zappy: Email sent successfully",c):console.error("❌ Zappy: Failed to send email - Server responded with error",c)}catch(e){console.error("❌ Zappy: Failed to send email",e)}}(),alert("תודה על פנייתך! ניצור איתך קשר בהקדם."),o.reset()):alert("נא להזין כתובת אימייל תקינה")})}),function(){"use strict";let e=0;function t(){if(e++,void 0===window.CookieConsent)return void(e<50&&setTimeout(t,100));const n=window.CookieConsent;try{n.run({autoShow:!0,mode:"opt-in",revision:0,categories:{necessary:{enabled:!0,readOnly:!0},analytics:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_ga"},{name:"_ga_*"},{name:"_gid"},{name:"_gat"}]}},marketing:{enabled:!1,readOnly:!1,autoClear:{cookies:[{name:"_fbp"},{name:"_fbc"},{name:"fr"}]}}},language:{default:"he",translations:{he:{consentModal:{title:"אנחנו משתמשים בעוגיות 🍪",description:"SAMUI משתמש בעוגיות כדי לשפר את החוויה שלך, לנתח שימוש באתר ולסייע במאמצי השיווק שלנו.",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",showPreferencesBtn:"נהל העדפות",footer:'<a href="#privacy-policy">מדיניות פרטיות</a> | <a href="#terms-conditions">תנאי שימוש</a>'},preferencesModal:{title:"העדפות עוגיות",acceptAllBtn:"אשר הכל",acceptNecessaryBtn:"רק הכרחי",savePreferencesBtn:"שמור העדפות",closeIconLabel:"סגור",sections:[{title:"עוגיות חיוניות",description:"עוגיות אלה הכרחיות לתפקוד האתר ולא ניתן להשבית אותן.",linkedCategory:"necessary"},{title:"עוגיות ניתוח",description:"עוגיות אלה עוזרות לנו להבין איך המבקרים מתקשרים עם האתר שלנו.",linkedCategory:"analytics"},{title:"עוגיות שיווקיות",description:"עוגיות אלה משמשות להצגת פרסומות מותאמות אישית.",linkedCategory:"marketing"}]}}}},guiOptions:{consentModal:{layout:"box",position:"bottom right",equalWeightButtons:!0,flipButtons:!1},preferencesModal:{layout:"box",equalWeightButtons:!0,flipButtons:!1}}}),"function"==typeof n.onChange&&n.onChange(function(e,t){t.includes("analytics")&&n.validConsent("analytics"),t.includes("marketing")&&n.validConsent("marketing")})}catch(e){}}"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",t),setTimeout(t,1e3)):"interactive"===document.readyState||"complete"===document.readyState?t():setTimeout(t,500),"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("load",t,{once:!0})}(),window.onload=function(){try{window.micAccessTool=new MicAccessTool({buttonPosition:"left",forceLang:"he-IL",icon:{position:{bottom:{size:50,units:"px"},left:{size:20,units:"px"},type:"fixed"},backgroundColor:"transparent",color:"transparent",img:"accessible",circular:!1},menu:{dimensions:{width:{size:300,units:"px"},height:{size:"auto",units:"px"}}}})}catch(e){}document.addEventListener("keydown",function(e){var t=e.altKey||e.metaKey,n=65===e.keyCode||65===e.which||e.key&&("a"===e.key.toLowerCase()||"å"===e.key||"Å"===e.key);t&&n&&(window.innerWidth>768&&(e.preventDefault(),e.stopPropagation(),document.body.classList.contains("accessibility-widget-visible")?document.body.classList.remove("accessibility-widget-visible"):(document.body.classList.add("accessibility-widget-visible"),setTimeout(function(){var e=document.getElementById("mic-access-tool-general-button");e&&e.click()},200))))},!0)};


/* ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */
(function(){
  try {
    if (window.__zappyPublishedLightboxInit) return;
    window.__zappyPublishedLightboxInit = true;

    function safeText(s){ try { return String(s || '').replace(/"/g,'&quot;'); } catch(e){ return ''; } }

    function ensureOverlayForToggle(toggle){
      try {
        if (!toggle || !toggle.id) return;
        if (toggle.id.indexOf('zappy-lightbox-toggle-') !== 0) return;
        var elementId = toggle.id.replace('zappy-lightbox-toggle-','');
        var label = document.querySelector('label.zappy-lightbox-trigger[for="' + toggle.id + '"]');
        if (!label) return;

        // If toggle is inside the label (corrupted), move it before the label so the for attribute works consistently.
        try {
          if (label.contains(toggle) && label.parentNode) {
            label.parentNode.insertBefore(toggle, label);
          }
        } catch (e0) {}

        var lightboxId = 'zappy-lightbox-' + elementId;
        var lb = document.getElementById(lightboxId);
        if (lb && lb.parentNode !== document.body) {
          try { document.body.appendChild(lb); } catch (eMove) {}
        }

        if (!lb) {
          var img = null;
          try { img = label.querySelector('img'); } catch (eImg0) {}
          if (!img) {
            try { img = document.querySelector('img[data-element-id="' + elementId + '"]'); } catch (eImg1) {}
          }
          if (!img) return;

          lb = document.createElement('div');
          lb.id = lightboxId;
          lb.className = 'zappy-lightbox';
          lb.setAttribute('data-zappy-image-lightbox','true');
          lb.style.display = 'none';
          lb.innerHTML =
            '<label class="zappy-lightbox-backdrop" for="' + toggle.id + '" aria-label="Close"></label>' +
            '<div class="zappy-lightbox-content">' +
              '<label class="zappy-lightbox-close" for="' + toggle.id + '" aria-label="Close">×</label>' +
              '<img class="zappy-lightbox-image" src="' + safeText(img.currentSrc || img.src || img.getAttribute('src')) + '" alt="' + safeText(img.getAttribute('alt') || 'Image') + '">' +
            '</div>';
          document.body.appendChild(lb);
        }

        // Keep overlay image in sync at open time (in case src changed / responsive currentSrc)
        function syncOverlayImage(){
          try {
            var imgCur = label.querySelector('img');
            var imgLb = lb.querySelector('img');
            if (imgCur && imgLb) {
              imgLb.src = imgCur.currentSrc || imgCur.src || imgLb.src;
              imgLb.alt = imgCur.alt || imgLb.alt;
            }
          } catch (eSync) {}
        }

        if (!toggle.__zappyLbBound) {
          toggle.addEventListener('change', function(){
            if (toggle.checked) syncOverlayImage();
            lb.style.display = toggle.checked ? 'flex' : 'none';
          });
          toggle.__zappyLbBound = true;
        }

        if (!lb.__zappyLbBound) {
          lb.addEventListener('click', function(ev){
            try {
              var t = ev.target;
              if (!t) return;
              if (t.classList && (t.classList.contains('zappy-lightbox-backdrop') || t.classList.contains('zappy-lightbox-close'))) {
                ev.preventDefault();
                toggle.checked = false;
                lb.style.display = 'none';
              }
            } catch (e2) {}
          });
          lb.__zappyLbBound = true;
        }

        if (!label.__zappyLbClick) {
          label.addEventListener('click', function(ev){
            try {
              if (document.body && document.body.classList && document.body.classList.contains('zappy-edit-mode')) return;
              if (ev && ev.target && ev.target.closest && ev.target.closest('a[href],button,input,select,textarea')) return;
              ev.preventDefault();
              ev.stopPropagation();
              toggle.checked = true;
              syncOverlayImage();
              lb.style.display = 'flex';
            } catch (e3) {}
          }, true);
          label.__zappyLbClick = true;
        }
      } catch (e) {}
    }

    function initZappyPublishedLightboxes(){
      try {
        // Repair orphaned labels (label has for=toggleId but input is missing)
        var orphanLabels = document.querySelectorAll('label.zappy-lightbox-trigger[for^="zappy-lightbox-toggle-"]');
        for (var i=0;i<orphanLabels.length;i++){
          var lbl = orphanLabels[i];
          var forId = lbl && lbl.getAttribute ? lbl.getAttribute('for') : null;
          if (!forId) continue;
          if (!document.getElementById(forId)) {
            var t = document.createElement('input');
            t.type = 'checkbox';
            t.id = forId;
            t.className = 'zappy-lightbox-toggle';
            t.setAttribute('data-zappy-image-lightbox','true');
            if (lbl.parentNode) lbl.parentNode.insertBefore(t, lbl);
          }
        }

        var toggles = document.querySelectorAll('input.zappy-lightbox-toggle[id^="zappy-lightbox-toggle-"]');
        for (var j=0;j<toggles.length;j++){
          ensureOverlayForToggle(toggles[j]);
        }

        // Close on ESC if any lightbox is open
        if (!document.__zappyLbEscBound) {
          document.addEventListener('keydown', function(ev){
            try {
              if (!ev || ev.key !== 'Escape') return;
              var openLb = document.querySelector('.zappy-lightbox[style*="display: flex"]');
              if (openLb) {
                var openToggle = null;
                try {
                  var id = openLb.id || '';
                  if (id.indexOf('zappy-lightbox-') === 0) {
                    openToggle = document.getElementById('zappy-lightbox-toggle-' + id.replace('zappy-lightbox-',''));
                  }
                } catch (e4) {}
                if (openToggle) openToggle.checked = false;
                openLb.style.display = 'none';
              }
            } catch (e5) {}
          });
          document.__zappyLbEscBound = true;
        }
      } catch (eInit) {}
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initZappyPublishedLightboxes, { once: true });
    } else {
      initZappyPublishedLightboxes();
    }
  } catch (eOuter) {}
})();
/* END ZAPPY_PUBLISHED_LIGHTBOX_RUNTIME */
