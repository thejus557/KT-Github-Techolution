import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'interpolation',
      path: '/interpolation',
      component: () => import('../components/InterpolationComponent.vue'),
    },
    {
      name: 'state',
      path: '/state',
      component: () => import('../components/StateComponent.vue'),
    },
    {
      name: 'binding',
      path: '/binding',
      component: () => import('../components/BindingComponent.vue'),
    },
    {
      name: 'conditional',
      path: '/conditional',
      component: () => import('../components/ConditionalComponent.vue'),
    },
    {
      name: 'loops',
      path: '/loops',
      component: () => import('../components/LoopComponent.vue'),
    },
    {
      name: 'event-handling',
      path: '/event-handling',
      component: () => import('../components/EventHandlingComponent.vue'),
    },
    {
      name: 'v-model',
      path: '/v-model',
      component: () => import('../components/VModelComponent.vue'),
    },
    {
      name: 'life-cycle',
      path: '/life-cycle',
      component: () => import('../components/LifeCycleComponent.vue'),
    },
    {
      name: 'template-ref',
      path: '/template-ref',
      component: () => import('../components/TemplateRefComponent.vue'),
    },
    {
      name: 'basics-component',
      path: '/basics-component',
      component: () => import('../components/BasicsComponent.vue'),
    },
  ],
})

export default router
