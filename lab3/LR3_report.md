
<blockquote>
<p dir="auto">Цель работы: Поиск и устранение XSS уязвимостей.</p>
</blockquote>
<h2 dir="auto"><a id="user-content-задание-1" class="anchor" aria-hidden="true" href="#задание-1"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Задание 1</h2>
<ol dir="auto">
<li>
<p dir="auto">Список книг и авторов
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146250673-84ec30dd-8ec2-413f-821d-c114268b0464.png"><img src="https://user-images.githubusercontent.com/82168526/146250673-84ec30dd-8ec2-413f-821d-c114268b0464.png" alt="image" style="max-width: 100%;"></a></p>
</li>
<li>
<p dir="auto">Обнаружим уязвимости:</p>
</li>
</ol>
<p dir="auto">2.1. Reflected XSS</p>
<p dir="auto">При вводе кода в фильтр выполнится скрипт:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146250711-0c550137-9a09-4b69-a7e0-4dc1c3a68323.png"><img src="https://user-images.githubusercontent.com/82168526/146250711-0c550137-9a09-4b69-a7e0-4dc1c3a68323.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">2.2. Persisted (Stored) XSS</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146250754-e7447154-f5ac-410f-916b-4a4d174e01df.png"><img src="https://user-images.githubusercontent.com/82168526/146250754-e7447154-f5ac-410f-916b-4a4d174e01df.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">Браузер интерпретирует введенный html, следовательно, внедряем JS:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146250785-30cfe791-18a0-4d1d-b9ea-c2e297e01174.png"><img src="https://user-images.githubusercontent.com/82168526/146250785-30cfe791-18a0-4d1d-b9ea-c2e297e01174.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146250796-1f897a5f-c2f6-4ecd-ad97-8b3b50e98130.png"><img src="https://user-images.githubusercontent.com/82168526/146250796-1f897a5f-c2f6-4ecd-ad97-8b3b50e98130.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">2.3. Cookie Injection</p>
<p dir="auto">Текст над фильтром отображает значение текущей cookie:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251002-0dde544b-1d89-4acf-8ca8-a57014278f7b.png"><img src="https://user-images.githubusercontent.com/82168526/146251002-0dde544b-1d89-4acf-8ca8-a57014278f7b.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">И интерпретирует код:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251027-795240be-f356-4b11-b07f-1cbe28babb4f.png"><img src="https://user-images.githubusercontent.com/82168526/146251027-795240be-f356-4b11-b07f-1cbe28babb4f.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">2.4. Session hijacking</p>
<p dir="auto">Мы можем захватит сессию, похитив cookie:</p>
<p dir="auto">Reflected XSS:
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251051-6a530b65-0913-4511-8ecd-d5a3634de3df.png"><img src="https://user-images.githubusercontent.com/82168526/146251051-6a530b65-0913-4511-8ecd-d5a3634de3df.png" alt="image" style="max-width: 100%;"></a>
Persisted (Stored) XSS:
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251085-64388aeb-7fb1-452b-a1d7-f6c72549a920.png"><img src="https://user-images.githubusercontent.com/82168526/146251085-64388aeb-7fb1-452b-a1d7-f6c72549a920.png" alt="image" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251100-6fc95f45-3cb2-43cd-b387-fd6ef4bd5964.png"><img src="https://user-images.githubusercontent.com/82168526/146251100-6fc95f45-3cb2-43cd-b387-fd6ef4bd5964.png" alt="image" style="max-width: 100%;"></a>
Cookie Injection:
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251120-e5db4aae-c5e3-416c-bb1d-145555386ca1.png"><img src="https://user-images.githubusercontent.com/82168526/146251120-e5db4aae-c5e3-416c-bb1d-145555386ca1.png" alt="image" style="max-width: 100%;"></a></p>
<ol start="3" dir="auto">
<li>Исправим уязвимости</li>
</ol>
<p dir="auto">3.1. Session hijacking
Для устранения уязвимости установим атрибут httpOnly:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251180-524c668e-f388-4c38-865c-8f6a925e8044.png"><img src="https://user-images.githubusercontent.com/82168526/146251180-524c668e-f388-4c38-865c-8f6a925e8044.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">Заметим, что внедренный код все еще выполняется, но у него нет доступа к cookie:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251196-8ff6ed7b-f559-496f-be3d-336ab6193a5b.png"><img src="https://user-images.githubusercontent.com/82168526/146251196-8ff6ed7b-f559-496f-be3d-336ab6193a5b.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">3.2. Persisted (Stored) XSS:
Включим экранирование в шаблонизаторе pug:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251220-969f1cba-d812-47e6-8845-ad5e6ba996fb.png"><img src="https://user-images.githubusercontent.com/82168526/146251220-969f1cba-d812-47e6-8845-ad5e6ba996fb.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">Теперь внедренный код не интерпретируется:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251281-a19bf1b3-c403-43fa-811d-43552f92f81d.png"><img src="https://user-images.githubusercontent.com/82168526/146251281-a19bf1b3-c403-43fa-811d-43552f92f81d.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">3.3. Reflected XSS &amp; Cookie Injection
Добавим HTTP-заголовок Content-Security-Policy, в котором укажем безопасный источник загрузки скриптов:</p>
<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251344-e52b63d6-5feb-4e5c-a8d6-4076ce7d6c2b.png"><img src="https://user-images.githubusercontent.com/82168526/146251344-e52b63d6-5feb-4e5c-a8d6-4076ce7d6c2b.png" alt="image" style="max-width: 100%;"></a></p>
<p dir="auto">Данные уязвимости больше нельзя эксплуатировать:</p>
<p dir="auto">Reflected XSS
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251362-78927821-0d98-4bde-a2b3-bfcc195db730.png"><img src="https://user-images.githubusercontent.com/82168526/146251362-78927821-0d98-4bde-a2b3-bfcc195db730.png" alt="image" style="max-width: 100%;"></a>
Cookie Injection
<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/82168526/146251374-7d91a958-f406-4d81-948d-7b8ef20f153b.png"><img src="https://user-images.githubusercontent.com/82168526/146251374-7d91a958-f406-4d81-948d-7b8ef20f153b.png" alt="image" style="max-width: 100%;"></a></p>
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
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="11d3c872aa0cdfffff5435265e50948cadaf30896374036e7c316cb642fb865b" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="6f1847ef107130a3e4f795a06fbafcc89fcad10db4fa6099023e6c6ac60062a9" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="f04e0bd9c83963d8c6fa147bdde277e22a12953c294c3bcca5c5ccc8231d2171" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="082682a0deb6b3ccab576fbbbd08522bf1967c911a51ec0729152e3bb2ee38c0" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="5447c8751b3f0184e9b9af8ea074ef2ba63bdfc20bad3887a87e61027cb32b78" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="0fadcadbcc7b66e634e24caa5d92865ed25b129cc7cf40e08c5e88223092757d" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="5d20c5ceccf262c1ba7ed2b4ecd4cb4e8dcb105868c6a316d79c2a55d11fda16" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="3fd090950f4559a9e702f99d3038422040bb40fc336471229a7117f7ad0b7ae4" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;,&quot;originating_url&quot;:&quot;https://github.com/sayf21/creating_secure_web_applications/blob/main/lab3/lab3_otchet.md&quot;,&quot;user_id&quot;:91276145}}" data-hydro-click-hmac="1242580ae79c39415c798d55268bd85a8a63b42d545d0a663d5b7289da2338c9" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
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

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>


  </body>
</html>

