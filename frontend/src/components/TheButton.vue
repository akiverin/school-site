<template>
  <RouterLink v-if="view == 'router'" class="button" :class="{'button--light': type=='light', 'button--border': type=='border', 'button--cancel': type=='cancel', 'button--mini': size=='mini'}" :to="path">
    <div v-if="icon" class="button__icon">
      <svg v-if="icon=='exit'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.44667 17.28L11.3333 19.1667L18 12.5L11.3333 5.83333L9.44667 7.72L12.8933 11.1667H0V13.8333H12.8933L9.44667 17.28ZM21.3333 0.5H2.66667C1.19333 0.5 0 1.69333 0 3.16667V8.5H2.66667V3.16667H21.3333V21.8333H2.66667V16.5H0V21.8333C0 23.3067 1.19333 24.5 2.66667 24.5H21.3333C22.8067 24.5 24 23.3067 24 21.8333V3.16667C24 1.69333 22.8067 0.5 21.3333 0.5Z" fill="white" />
      </svg>
    </div>
    {{label}}
  </RouterLink>
  <a v-if="view == 'link'" class="button" :class="{'button--light': type=='light', 'button--border': type=='border', 'button--cancel': type=='cancel', 'button--mini': size=='mini'}" :href="path">
    <div v-if="icon" class="button__icon">
      <svg v-if="icon=='exit'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.44667 17.28L11.3333 19.1667L18 12.5L11.3333 5.83333L9.44667 7.72L12.8933 11.1667H0V13.8333H12.8933L9.44667 17.28ZM21.3333 0.5H2.66667C1.19333 0.5 0 1.69333 0 3.16667V8.5H2.66667V3.16667H21.3333V21.8333H2.66667V16.5H0V21.8333C0 23.3067 1.19333 24.5 2.66667 24.5H21.3333C22.8067 24.5 24 23.3067 24 21.8333V3.16667C24 1.69333 22.8067 0.5 21.3333 0.5Z" fill="white" />
      </svg>
    </div>
    {{label}}
  </a>
  <button v-if="view == 'button'" class="button" :class="{'button--light': type=='light', 'button--border': type=='border', 'button--cancel': type=='cancel', 'button--mini': size=='mini'}" :on-click="path">
    <div v-if="icon" class="button__icon">
      <svg v-if="icon=='exit'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.44667 17.28L11.3333 19.1667L18 12.5L11.3333 5.83333L9.44667 7.72L12.8933 11.1667H0V13.8333H12.8933L9.44667 17.28ZM21.3333 0.5H2.66667C1.19333 0.5 0 1.69333 0 3.16667V8.5H2.66667V3.16667H21.3333V21.8333H2.66667V16.5H0V21.8333C0 23.3067 1.19333 24.5 2.66667 24.5H21.3333C22.8067 24.5 24 23.3067 24 21.8333V3.16667C24 1.69333 22.8067 0.5 21.3333 0.5Z" fill="white" />
      </svg>
    </div>
    {{label}}
  </button>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  view: {
    type: String,
    default: 'router',
  },
  path: {
    type: String,
    default: '#',
  },
  type: {
    type: String,
    default: 'default',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'big',
  },
  icon: {
    type: String,
    default: NaN,
  },
});
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    width: fit-content;
    padding: 14px 50px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: #1C52A2;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%), 0 0 5px rgb(0 0 0 / 10%);
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #0C3777;
    }
  }

  .button--light {
    color: #1C52A2;
    background-color: #FFFFFF;
    transition: all 150ms ease-in-out;

    &:hover {
      color: #FFFFFF;
      background-color: #0C3777;
    }
  }

  .button--border {
    padding: 11px 50px;
    color: #1C52A2;
    background-color: transparent;
    border: 3px solid #1C52A2;
    transition: all 150ms ease-in-out;

    &:hover {
      color: #FFFFFF;
      background-color: #1C52A2;
    }
  }

  .button--mini {
    padding: 10px 22px;
    font-size: 1.2rem;
    border-radius: 4px;

    @media screen and (width <= 540px){
      padding: 6px 14px;
    }
  }

  .button--cancel {
    color: #A21C1C;
    background-color: transparent;
    border: 3px solid transparent;
    box-shadow: none;
    transition: all 150ms ease-in-out;

    &:hover {
      color: #FFFFFF;
      background-color: #A21C1C;
    }
  }

  .button__icon {
    display: flex;
  }
</style>
