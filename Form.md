// zodResolver => acts as a link between react-hook-form and zod for performing form-Validation.


Code :

// provides a form's context and acts as a wrapper.
<Form {...form}>
</Form>


       <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>


// has the access to the context state through which we can access error messages. 
<FormItem>
</FormItem>

// rendering the label of the form.
<FormLabel>
</FormLabel>

// optional but is recommended (it provides proper aria-labels ) to use for using it as a wrapper to render the input or other components.
<FormControl>
</FormControl>

// Error Messgae
<FormMessage />
