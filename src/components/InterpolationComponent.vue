<template>
  <div class="container">
    <p>
      For interpolation we use,
      <code>&#123;&#123; expression &#125;&#125;</code>
    </p>

    <p>
      In the context of Vue.js and JavaScript, an expression is a piece of code
      that evaluates to a value. Expressions can include variables, operations,
      function calls, and more. They are used within the double curly braces
      <code>&#123;&#123; &#125;&#125;</code> for interpolation in Vue templates
      to dynamically display data.
    </p>

    <br />
    <br />
    <br />
    <br />
    <br />

    <h2>Interpolation Example</h2>

    <p>
      Hello, my name is <strong>{{ firstName }} {{ lastName }}</strong>
    </p>

    <p>
      My full name is
      <strong
        >{{ firstName.toUpperCase() }} {{ lastName.toUpperCase() }}</strong
      >
    </p>

    <p>
      My full name is
      <strong
        >{{ firstName.charAt(0).toUpperCase() + firstName.slice(1) }}
        {{ lastName.charAt(0).toUpperCase() + lastName.slice(1) }}</strong
      >
    </p>

    <p>
      My full name is
      <strong
        >{{ firstName.charAt(0).toUpperCase() + firstName.slice(1) }}
        {{
          isLastName
            ? lastName
            : 'Cant render lastname, cause its not available'
        }}</strong
      >
    </p>

    <p>
      My full name is <strong>{{ fullName() }}</strong
      >. This is a return value from fullName function
    </p>
  </div>
</template>

<script setup lang="ts">
const firstName = 'suryateja'
const lastName = 'kandukuru'
const isLastName = false

const fullName = () => {
  return `${firstName} ${lastName}`
}
</script>
