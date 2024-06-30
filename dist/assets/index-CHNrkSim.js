(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();console.log("theme.ts loaded");let L=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";console.log(L);var b,y;L=="dark"?(b=document.querySelector("body"))==null||b.classList.add("dark-theme"):(y=document.querySelector("body"))==null||y.classList.add("light-theme");const A={western:[{menu:[{title:["Shiitake Mushroom Soup"],description:["Shiitake mushroom soup is a savory and flavorful soup made with shiitake mushrooms as the main ingredient. It can be creamy or brothy, depending on the recipe.  It often includes other vegetables like onions, carrots, and garlic, and can be seasoned with herbs like thyme or nutmeg."],by:["Nana Aziz"],preptime:["5"],kcal:["227"],ingredients:[{item:["A packet of shitake mushrooms half mixed and half ground","6 pieces of cheese","1 chicken cube","6 tablespoons of powdered milk","Sufficient water according to the concentration of the soup","4 tablespoons of wheat flour mixed with a cup of water","A few dried parsley leaves","Salt to taste"]}],instructions:[{step:["Put the ground ingredients together, and put them in a pan or pot with a stem. Bring to a boil over medium heat.","Add the flour mixture, mixed mushrooms, and other ingredients when it boils. Do not leave stirring until thickened.","If it is not thick enough, add more flour mixture.","And it is ready to be served. Goodluck."]}],images:[{image:["https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Shiitake/soup1.jpg","https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Shiitake/soup2.jpg","https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Shiitake/soup3.jpg"]}]},{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Aglio/aglio.jpg","https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Aglio/aglio2.jpg","https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Aglio/aglio3.jpg","https://raw.githubusercontent.com/HaiziIzzudin/let-makciks-cook/main/images/Western/Aglio/aglio4.jpg"]}]}]}],asian:[{menu:[{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["soup1.jpg","soup2.jpg","soup3.jpg"]}]}]}],middleeast:[{menu:[{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["soup1.jpg","soup2.jpg","soup3.jpg"]}]}]}]};function o(n,a,e){const c=A;let t;if(n==="western")t=c.western[0].menu;else if(n==="asian")t=c.asian[0].menu;else if(n==="middleeast")t=c.middleeast[0].menu;else throw new Error("Invalid ethnicity");const i=t[a];if(e==="title")return i.title[0];if(e==="description")return i.description[0];if(e==="by")return i.by[0];if(e==="prep")return i.preptime[0];if(e==="kcal")return i.kcal[0];if(e==="ingredients")return i.ingredients[0].item;if(e==="instructions")return i.instructions[0].step;if(e==="image")return i.images[0].image;throw new Error("Invalid attribute")}function u(n){const a=A;let e;if(n==="western")e=a.western[0].menu;else if(n==="asian")e=a.asian[0].menu;else if(n==="middleeast")e=a.middleeast[0].menu;else throw new Error("Invalid ethnicity");return e.length}console.log(o("western",1,"title"));console.log(o("western",0,"description"));class C extends HTMLElement{connectedCallback(){let a="";a+=`
    <nav>
      
      <div class="nav-flex">
      
        <img src="images/logo.png" id="logo">
        
        <div class="c-iblk">
          
          <a href="index.html">Home</a>
          
          <span>
            <a href="#" id="W-ddown">Western<i class="fa-solid fa-caret-down"></i></a>
            <a href="#">Asian<i class="fa-solid fa-caret-down"></i></a>
            <a href="#">Middle East<i class="fa-solid fa-caret-down"></i></a>
          </span>
          
          <a href="forms.html" class="ripple">Want to be featured?</a>
          
          <a href="#" id="x-button" class=""><i class="fa-solid fa-circle-xmark"></i></a>

          <a href="#" class="theme-button"><i class="fa-solid fa-circle-half-stroke"></i></a>
          

        </div>
      
      </div>
    
    </nav>
    
    
    <div id="W-menulist" class="">`;for(let e=0;e<u("western");e++)a+=`
      <div id="W${e}">
        <img src="${o("western",e,"image")[0]}">
        <h2>${o("western",e,"title")}</h2>
      </div>
      `;a+="</div>",this.innerHTML=a}}customElements.define("custom-header",C);class T extends HTMLElement{connectedCallback(){let a=`
    <footer>
      <div>
        <img src="images/logo.png" id="logo">
        <p><i>Let Makciks Cook</i>is a website dedicated to sharing recipes and cooking tutorials for variety
        of menus, including Western, Asian, and Middle East.
        <br><br>
        Our company address:<br>
        Jalan Kiambang,<br>
        12345 Off Jalan Petra,<br>
        Selangor D.E..
        <br><br>
        Any enquiries, kindly email to:<br>
        <a href="mailto:customersupport@makcikscook.com">customersupport@makcikscook.com</a>
        </p>
      </div>

      <div id="sitemap-link">
        <h5>Western</h5>`;for(let e=0;e<u("western");e++)a+=`<a href="#" id="W${e}">${o("western",e,"title")}</a>`;a+=`</div>
        
      <div id="sitemap-link">
        <h5>Asian</h5>`;for(let e=0;e<u("asian");e++)a+=`<a href="#" id="W${e}">${o("asian",e,"title")}</a>`;a+=`</div>
      
      <div id="sitemap-link">
        <h5>Middle East</h5>`;for(let e=0;e<u("middleeast");e++)a+=`<a href="#" id="W${e}">${o("middleeast",e,"title")}</a>`;a+=`</div>
      <div id="sitemap-link sitemap-main">
        <a href="index.html">Home</a>
        <a href="forms.html">Be Featured!</a>
        <a href="#">Carrers</a>
      </div>

    </footer>
    `,this.innerHTML=a}}customElements.define("custom-footer",T);let m=document.querySelector("#W-ddown"),s=document.querySelector("#W-menulist"),d=document.querySelector("#x-button");m==null||m.addEventListener("mouseenter",()=>{s==null||s.classList.add("show"),d==null||d.classList.add("xbtn-show")});s==null||s.addEventListener("mouseenter",()=>{s==null||s.classList.add("show"),d==null||d.classList.add("xbtn-show")});m==null||m.addEventListener("mouseleave",()=>{s==null||s.classList.remove("show"),d==null||d.classList.remove("xbtn-show")});s==null||s.addEventListener("mouseleave",()=>{s==null||s.classList.remove("show"),d==null||d.classList.remove("xbtn-show")});const j=document.getElementById("W0"),B=document.getElementById("W1"),q=document.getElementById("W-menulist"),I=document.getElementById("featured-btn"),O=document.getElementById("sitemap-link"),f=document.getElementById("specified-menu"),p=document.getElementById("featured-card");q.addEventListener("click",()=>{f.classList.add("specified-menu-show"),p.classList.add("featured-card-hide"),p.classList.remove("featured-card-show")});I.addEventListener("click",()=>{f.classList.add("specified-menu-show"),p.classList.add("featured-card-hide"),p.classList.remove("featured-card-show")});O.addEventListener("click",()=>{f.classList.add("specified-menu-show"),p.classList.add("featured-card-hide"),p.classList.remove("featured-card-show")});let g=document.querySelector(".theme-button"),r=document.querySelector("body");g==null||g.addEventListener("click",()=>{r!=null&&r.classList.contains("light-theme")?(console.log("changing to dakr theme"),r==null||r.classList.remove("light-theme"),r==null||r.classList.add("dark-theme")):(console.log("changing to light theme"),r==null||r.classList.remove("dark-theme"),r==null||r.classList.add("light-theme"))});function W(n){let a="western",e=0;const c=(t,i)=>{let l="",E=o(t,i,"image")[0],S=o(t,i,"title"),M=o(t,i,"description"),z=o(t,i,"by"),H=o(t,i,"prep"),$=o(t,i,"kcal"),k=o(t,i,"ingredients"),v=o(t,i,"instructions"),w=o(t,i,"image");l+=`
    <section id="section1">
      <img src="${E}" alt="Menu Image">
      <div>
        <h1>${S}</h1>
        <p>${M}</p>
      </div>
    </section>
    `,l+=`
    <section id="section2">
      <div>
        <h5>Recipe by</h5>
        <p>${z}</p>
      </div>
      <div>
        <h5>Preparation time (estimate)</h5>
        <p>${H} minutes</p>
      </div>
      <div>
        <h5>Energy</h5>
        <p>${$} kcal</p>
      </div>
      <div>
        <h5 style="margin-left: 25px;">Tools/apparatus</h5>
        <ul style="list-style-type: square;">
        ${Array.isArray(k)?k.map(h=>`<li>${h}</li>`).join(""):""}
        </ul>
      </div>
    </section>
    `,l+=`
    <section id="section34">
      <div>`;for(let h=0;h<v.length;h++)l+=`
        <h5>Step ${h+1}</h5>
        <p>${v[h]}</p>
      `;l+=`
      </div>
      <div>`;for(let h=0;h<w.length;h++)l+=`
        <img src="${w[h]}">
        `;l+="</section>",n.innerHTML=l};I.addEventListener("click",()=>c(a,1)),j.addEventListener("click",()=>c(a,0)),B.addEventListener("click",()=>c(a,1)),c(a,e)}W(document.querySelector("#specified-menu"));
