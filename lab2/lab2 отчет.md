
<p dir="auto">Цель работы: Поиск и устранение SQL Injection.</p>
<h2 dir="auto"><a id="user-content-задание-1" class="anchor" aria-hidden="true" href="#задание-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Задание 1</h2>
</blockquote>
<ol dir="auto">
<li>
<p dir="auto">Список книг и авторов
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355811-3f02416b-a599-43fd-9baf-864a6fe9a2ef.png"><img src="https://user-images.githubusercontent.com/90596797/147355811-3f02416b-a599-43fd-9baf-864a6fe9a2ef.png" alt="image" style="max-width: 100%;"></a></p>
</li>
<li>
<p dir="auto">Обнаружение SQL инъекции
При вводе ') в фильтр выводится сообщение об ошибке и запрос к базе данных
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147047474-c9e866cd-32ca-4150-8a11-fb6d0f499963.png"><img src="https://user-images.githubusercontent.com/90596797/147047474-c9e866cd-32ca-4150-8a11-fb6d0f499963.png" alt="image" style="max-width: 100%;"></a></p>
</li>
</ol>
<p dir="auto">9.1. Обход установленного фильтра
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355531-53a1ad19-7010-4bdd-819d-6679bba24461.png"><img src="https://user-images.githubusercontent.com/90596797/147355531-53a1ad19-7010-4bdd-819d-6679bba24461.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">9.2. Получение данных из таблицы users
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355607-bcfb4f04-86f3-4f3f-9139-43567a378370.png"><img src="https://user-images.githubusercontent.com/90596797/147355607-bcfb4f04-86f3-4f3f-9139-43567a378370.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">9.3. Похищение пароля пользователя</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355624-1e387872-97c3-42b1-86dc-a489993644fc.png"><img src="https://user-images.githubusercontent.com/90596797/147355624-1e387872-97c3-42b1-86dc-a489993644fc.png" alt="image" style="max-width: 100%;"></a></p>
<ol start="10" dir="auto">
<li>Исправление уязвимости</li>
</ol>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147051589-25bc193c-6332-41e6-8386-dfd151f4bc3f.png"><img src="https://user-images.githubusercontent.com/90596797/147051589-25bc193c-6332-41e6-8386-dfd151f4bc3f.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">10.1 Исправление уязвимости с помощью параметризации запроса:
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355671-ef3f5cb3-3866-4bf0-909d-16ebe59f609f.png"><img src="https://user-images.githubusercontent.com/90596797/147355671-ef3f5cb3-3866-4bf0-909d-16ebe59f609f.png" alt="image" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90596797/147355701-0497ad2f-466f-4c10-ac4c-1ab0ad5f3502.png"><img src="https://user-images.githubusercontent.com/90596797/147355701-0497ad2f-466f-4c10-ac4c-1ab0ad5f3502.png" alt="image" style="max-width: 100%;"></a></p>
</article>
  </div>

    </div>

  </readme-toc>

  

  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button data-close-dialog="" type="submit" data-view-component="true" class="btn">  Go
</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/Yulia-Mokroborodova/creating_secure_web_applications/find-definition"
     data-tagsearch-ref="main">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box color-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>


</div>



  </div>
</div>

    </main>
  </div>

  </div>

          <footer class="footer width-full container-xl p-responsive" role="contentinfo">


  <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
    <ul class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mt-2 mt-lg-0 d-flex flex-items-center">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
          <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>        <span>
        &copy; 2022 GitHub, Inc.
        </span>
      </li>
    </ul>
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-8 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="122981d689acd45ddf4fa15693dd738e47e428203688ff87f04c5b67a6616b4e" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="438da35d021f8644bbdb0c675140e9b4ab8cd7485d81e34d4a6a397626ed4271" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="924382d3160080c873f43887ac40d3d13475cebb5fe66f696af79fc8f7bd3f0d" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8326ca49c79216578cfc7f446457ae5ded8b36914ceac58b2915d86c2d582d47" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="bbb979682bf025a1847162ab96a4a89cc91c146f150eab1f8cfd64b7e353d55b" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b427fb6b993bfdedcc906ed8a96d7519fe8682c2e025b4bf977a0bc5a01125c4" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="aed6566f23bbe1bb3d854ff8e189fd8b83c5bbf0539421a833ae76074d270a8b" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4e16c3b95873bd25d2ea67104811aa54e09995e27c2a0775cf75f8ab23f46fe5" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;,&quot;originating_url&quot;:&quot;https://github.com/Yulia-Mokroborodova/creating_secure_web_applications/blob/main/lab2/lab2%20%D0%BE%D1%82%D1%87%D0%B5%D1%82.md&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dc6476802a1547964cbff197c00ecec5de09e07f3967cb60ae7da10cee5e19e3" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-fg-muted"></span>
  </div>
</footer>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal" aria-labelledby="box-title">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    
