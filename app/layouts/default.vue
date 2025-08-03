<template>
  <div>
    <NuxtLoadingIndicator />
    <header class="bg-primary">
      <nav>
        <ul>
          <li>
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink to="/todos/1"> Todo single </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <NuxtPage />

    <footer>Some copyright things</footer>
  </div>
</template>
