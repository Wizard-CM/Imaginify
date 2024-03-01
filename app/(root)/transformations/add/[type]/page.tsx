import Header from "@/components/shared/header";
import React from "react";
import { transformationTypes } from "@/constants";
import TranformationForm from "@/components/shared/tranformation-form";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/users.actions";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const tranformation = transformationTypes[type];
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId as string);
  return (
    <>
      <Header title={tranformation.title} subTitle={tranformation.subTitle} />
      <section className="mt-10">
        <TranformationForm
          action="Add"
          userId={user._id}
          type={tranformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
