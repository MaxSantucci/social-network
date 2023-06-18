import React, {KeyboardEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

type MessageFormType = {
   message: string
}

type AddMessageFormProps = {
   addMessageHandler?: (message: string) => void;
   addPostHandler?: (post: string) => void
   textButton: string
};

export const AddMessageForm: React.FC<AddMessageFormProps> =
   ({
       addMessageHandler,
       addPostHandler,
       textButton
    }) => {
      const {
         register,
         handleSubmit,
         setValue,
         formState: {errors}
      } = useForm<MessageFormType>({
         defaultValues: {
            message: ''
         },
      });
      const onSubmit: SubmitHandler<MessageFormType> = (data) => {
         if (addMessageHandler) {
            addMessageHandler(data.message)
            setValue('message', '')
         }
         if (addPostHandler) {
            addPostHandler(data.message)
            setValue('message', '')
         }
      }

      const keyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
         if (e.code === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(onSubmit)();
         }
      };

      return (
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center pt-2"
         >
         <textarea
            onKeyUp={keyUpHandler}
            {...register('message', {
               required: true,
            })}
         ></textarea>
            {errors.message?.type === 'required' &&
               <div style={{color: 'red'}}>Message is required</div>}
            <button
               className="mt-1 bg-black text-white"
            >
               {textButton}
            </button>
         </form>
      );
   };