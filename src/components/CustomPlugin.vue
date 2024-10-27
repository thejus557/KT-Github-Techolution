<template>
  <div>
    <p>
      Default Format (title case): {{ $formatText('this is a sample text') }}
    </p>
    <p>Uppercase: {{ $formatText('this is a sample text', 'uppercase') }}</p>
    <p>Lowercase: {{ $formatText('THIS IS A SAMPLE TEXT', 'lowercase') }}</p>
    <p>Title Case: {{ $formatText('this is a sample text', 'titleCase') }}</p>
    <p>
      Capitalize First:
      {{ $formatText('this is a sample text', 'capitalizeFirst') }}
    </p>
  </div>
  <div>surya</div>
</template>

<script setup lang="ts"></script>
