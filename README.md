// ServerFull and Serverless database architechture

domain : https://imaginify-sandy.vercel.app/


// Not UnderStood //
const form = useForm<z.infer<typeof formSchema>>({

// form Validation
resolver: zodResolver(formSchema),

defaultValues: {
title: "",
},
});



// Not UnderStood // 
    <FormField
    <!-- used for linking the formField with the form's state -->
      control={control}

    <!-- name of the formfeild -->
      name={name}

      <!-- Function responsible for rendering the input-UI -->
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />