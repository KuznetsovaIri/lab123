
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
    
