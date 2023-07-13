import {TextareaAutosize} from '@mui/material';
import React, {KeyboardEvent} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {IoSend} from 'react-icons/io5';

type MessageFormType = {
   message: string
}

type AddMessageFormProps = {
   addMessageHandler?: (message: string) => void;
   addPostHandler?: (post: string) => void
   textButton: string
   placeholder: string
};

export const AddMessageForm: React.FC<AddMessageFormProps> =
   ({
       addMessageHandler,
       addPostHandler,
       placeholder
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
            className="w-300 h-50 flex justify-center flex-col items-center pt-2 relative"
         >
            <TextareaAutosize
               className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
               placeholder={placeholder}
               onKeyUp={keyUpHandler}
               {...register('message', {
                  required: true,
               })}></TextareaAutosize>
            {errors.message?.type === 'required' &&
               <div style={{color: 'red'}}>Message is required</div>}
            <button
               className={`mt-1 rounded-lg text-white absolute -translate-y-1/2 right-2 top-1/2 ${errors.message?.type ? 'disabled:opacity-50' : ''}`}
               disabled={!!errors.message?.type}
            >
               <IoSend className='text-blue-500'/>
            </button>
         </form>
      );
   };