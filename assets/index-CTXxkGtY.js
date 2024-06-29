(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();console.log("theme.ts loaded");let w=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";console.log(w);var k,y;w=="dark"?(k=document.querySelector("body"))==null||k.classList.add("dark-theme"):(y=document.querySelector("body"))==null||y.classList.add("light-theme");let u=document.querySelector(".theme-button"),o=document.querySelector("body");u==null||u.addEventListener("click",()=>{o!=null&&o.classList.contains("light-theme")?(console.log("changing to dakr theme"),o==null||o.classList.remove("light-theme"),o==null||o.classList.add("dark-theme")):(console.log("changing to light theme"),o==null||o.classList.remove("dark-theme"),o==null||o.classList.add("light-theme"))});const b={western:[{menu:[{title:["Shiitake Mushroom Soup"],description:["Shiitake mushroom soup is a savory and flavorful soup made with shiitake mushrooms as the main ingredient. It can be creamy or brothy, depending on the recipe.  It often includes other vegetables like onions, carrots, and garlic, and can be seasoned with herbs like thyme or nutmeg."],by:["Nana Aziz"],preptime:["5"],kcal:["227"],ingredients:[{item:["A packet of shitake mushrooms half mixed and half ground","6 pieces of cheese","1 chicken cube","6 tablespoons of powdered milk","Sufficient water according to the concentration of the soup","4 tablespoons of wheat flour mixed with a cup of water","A few dried parsley leaves","Salt to taste"]}],instructions:[{step:["Put the ground ingredients together, and put them in a pan or pot with a stem. Bring to a boil over medium heat.","Add the flour mixture, mixed mushrooms, and other ingredients when it boils. Do not leave stirring until thickened.","If it is not thick enough, add more flour mixture.","And it is ready to be served. Goodluck."]}],images:[{image:["images/Western/Shiitake/soup1.jpg","images/Western/Shiitake/soup2.jpg","images/Western/Shiitake/soup3.jpg"]}]},{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["soup1.jpg","soup2.jpg","soup3.jpg"]}]}]}],asian:[{menu:[{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["soup1.jpg","soup2.jpg","soup3.jpg"]}]}]}],middleeast:[{menu:[{title:["Spaghetti Aglio Olio Shrimp"],description:[`This is a simple Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. "Aglio e olio" translates to "garlic and oil" in Italian. The shrimp are typically cooked separately and added on top of the pasta for a protein boost. It's a quick and flavorful dish.`],by:["Hayati Abdullah"],preptime:["30"],kcal:["484"],ingredients:[{item:["Boiled 1 packet spaghetti (do not discard the boiled water)","Shrimp","Chopped garlic","Aglio Olio spice","Spaghetti broth","Salt","Anchovy powder","Broccoli","Capsicum","Mushroom","Cherry tomatoes","Chopped parsley"]}],instructions:[{step:["Fry the shrimp until cooked. Remove and set aside.","In the same pan as fried shrimp, saute garlic until fragrant.","Add aglio olio spices and stir-fry for a while.","Then add the spaghetti boiled water. Season with salt and anchovy powder.","Add broccoli, capsicum and mushroom. Close the pan for a moment.","When the vegetables are half cooked, add the spaghetti, cherry tomatoes, parsley, and shrimp that were fried earlier.","Mix well. Ready to be served."]}],images:[{image:["soup1.jpg","soup2.jpg","soup3.jpg"]}]}]}]};function r(h,s,i){const c=b;let t;t=c.western[0].menu;const e=t[s];if(i==="title")return e.title[0];if(i==="description")return e.description[0];if(i==="by")return e.by[0];if(i==="prep")return e.preptime[0];if(i==="kcal")return e.kcal[0];if(i==="ingredients")return e.ingredients[0].item;if(i==="instructions")return e.instructions[0].step;if(i==="image")return e.images[0].image;throw new Error("Invalid attribute")}function j(h){const s=b;let i;return i=s.western[0].menu,i.length}console.log(r("western",1,"title"));console.log(r("western",0,"description"));class q extends HTMLElement{connectedCallback(){let s="";s+=`
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
          
          <a href="#" class="ripple">Want to be featured?</a>
          
          <a href="#" id="x-button" class=""><i class="fa-solid fa-circle-xmark"></i></a>

          <a href="#" class="theme-button"><i class="fa-solid fa-circle-half-stroke"></i></a>
          

        </div>
      
      </div>
    
    </nav>
    
    
    <div id="W-menulist" class="">`;for(let i=0;i<j();i++)s+=`
      <div id="W${i}">
        <img src="${r("western",i,"image")[0]}">
        <h2>${r("western",i,"title")}</h2>
      </div>
      `;s+="</div>",this.innerHTML=s}}customElements.define("custom-header",q);class B extends HTMLElement{connectedCallback(){this.innerHTML=`
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

      <div class="sitemap-link">
        <h5>Western</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link">
        <h5>Asian</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link">
        <h5>Middle East</h5>
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      
      <div class="sitemap-link sitemap-main">
        <a href="index.html">Home</a>
        <a href="#">Be Featured!</a>
        <a href="#">Carrers</a>
      </div>

    </footer>
    `}}customElements.define("custom-footer",B);let m=document.querySelector("#W-ddown"),a=document.querySelector("#W-menulist"),l=document.querySelector("#x-button");m==null||m.addEventListener("mouseenter",()=>{a==null||a.classList.add("show"),l==null||l.classList.add("xbtn-show")});a==null||a.addEventListener("mouseenter",()=>{a==null||a.classList.add("show"),l==null||l.classList.add("xbtn-show")});m==null||m.addEventListener("mouseleave",()=>{a==null||a.classList.remove("show"),l==null||l.classList.remove("xbtn-show")});a==null||a.addEventListener("mouseleave",()=>{a==null||a.classList.remove("show"),l==null||l.classList.remove("xbtn-show")});const L=document.getElementById("featured-btn"),O=document.getElementById("W0"),$=document.getElementById("W1"),H=document.getElementById("W-menulist"),M=document.getElementById("specified-menu"),p=document.getElementById("featured-card");H.addEventListener("click",()=>{M.classList.add("specified-menu-show"),p.classList.add("featured-card-hide"),p.classList.remove("featured-card-show")});L.addEventListener("click",()=>{M.classList.add("specified-menu-show"),p.classList.add("featured-card-hide"),p.classList.remove("featured-card-show")});function x(h){let s="western",i=0;const c=(t,e)=>{let n="",A=r(t,e,"image")[0],S=r(t,e,"title"),E=r(t,e,"description"),I=r(t,e,"by"),C=r(t,e,"prep"),T=r(t,e,"kcal"),g=r(t,e,"ingredients"),f=r(t,e,"instructions"),v=r(t,e,"image");n+=`
    <section id="section1">
      <img src="${A}" alt="Menu Image">
      <div>
        <h1>${S}</h1>
        <p>${E}</p>
      </div>
    </section>
    `,n+=`
    <section id="section2">
      <div>
        <h5>Recipe by</h5>
        <p>${I}</p>
      </div>
      <div>
        <h5>Preparation time (estimate)</h5>
        <p>${C} minutes</p>
      </div>
      <div>
        <h5>Energy</h5>
        <p>${T} kcal</p>
      </div>
      <div>
        <h5 style="margin-left: 25px;">Tools/apparatus</h5>
        <ul style="list-style-type: square;">
        ${Array.isArray(g)?g.map(d=>`<li>${d}</li>`).join(""):""}
        </ul>
      </div>
    </section>
    `,n+=`
    <section id="section34">
      <div>`;for(let d=0;d<f.length;d++)n+=`
        <h5>Step ${d+1}</h5>
        <p>${f[d]}</p>
      `;n+=`
      </div>
      <div>`;for(let d=0;d<v.length;d++)n+=`
        <img src="${v[d]}">
        `;n+="</section>",h.innerHTML=n};L.addEventListener("click",()=>c(s,1)),O.addEventListener("click",()=>c(s,0)),$.addEventListener("click",()=>c(s,1)),c(s,i)}x(document.querySelector("#specified-menu"));
