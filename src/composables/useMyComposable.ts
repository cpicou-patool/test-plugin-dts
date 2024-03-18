import { type MyType } from '@/types';
import { ref, type Ref } from 'vue';

export const externalState: Ref<MyType | null> = ref(null);
export const useMyComposable = () => {
  const nullableInternalState: Ref<MyType | null> = ref(null);
  const stringableInternalState: Ref<MyType | string> = ref();
  const undefinableInternalState: Ref<MyType | undefined> = ref(undefined);
  const noRefInternalState: MyType | null = null;

  return {
    nullableInternalState,
    stringableInternalState,
    undefinableInternalState,
    noRefInternalState
  };
};
